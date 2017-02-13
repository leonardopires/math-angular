import { Pipe, PipeTransform } from '@angular/core';
import * as math from 'mathjs';

@Pipe({
  name: 'mathParse'
})
export class MathParsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try {
      return math.parse(value);
    } catch (ex){
      return value + ' - exception: ' + ex;
    }
  }

}
