import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    let charTotal = value.length;//目标字符串总长度
    let maxStrKeepLength:number = 18;//西文16个字符，中文则8个字
    let strKeepLength = 0;
    let maxIndex:number;
    if(args){
      maxStrKeepLength = args;
    }
    console.log(maxStrKeepLength);
    for(let i=0;i<charTotal;i++){
      if(strKeepLength < maxStrKeepLength){
        let num = this.isChinese(value[i])?2:1;
        strKeepLength = strKeepLength + num;
        maxIndex = i + 1; 
      }else{
        maxIndex = i;
        break;
      }
    }
    return value.substring(0,maxIndex);
  }
  /**
   * 判断是否为中文
   * @param srcString:源字符串 
   */
  isChinese(srcString:string){
    let re = /[^\u4E00-\u9FA5]$/;
    if (re.test(srcString)) return false;
    return true;
  }

}
