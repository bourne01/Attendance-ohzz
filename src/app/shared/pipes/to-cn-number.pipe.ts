import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCnNumber'
})
export class ToCnNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let cnNumberList:string[] = ['一','二','三','四','五','六','七','八','九','十','十一','十二'];
    return cnNumberList[value];
  }

}
