import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productTechData'
})
export class ProductTechDataPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if (value) {
      if (value.indexOf('\n') > 0 && value.indexOf('|') > 0) {
        const rows = value.split('\n');
        let result = '';
        rows.forEach(element => {
          const colimns = element.split('|');
          result = result.concat(`<tr><th scope="row">${colimns[0]}</th><td>
      ${colimns[1]}</td></tr>`);
        });
        return `<table class="table table-sm table-striped">${result}</table>`;
      }
    }
    return value;
  }
}
