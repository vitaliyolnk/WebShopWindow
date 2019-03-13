import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setErrorMessage();
  }

  private setErrorMessage() {
   const errorCode: number = +this.route.snapshot.queryParams['ec'];
   if (errorCode === 0) {
     this.errorMessage = 'Unreachable resource.';
   } else
   if (errorCode > 400 && errorCode < 499) {
     this.errorMessage = 'User error';
   } else {
    this.errorMessage = 'Server error';
   }
  }
}
