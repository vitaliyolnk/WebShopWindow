import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from './products/shared/app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(private titleService: Title ) { }
  title = AppSettings.WEBSITE_NAME;
  ngOnInit(): void {
    this.titleService.setTitle( this.title );
  }


  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
