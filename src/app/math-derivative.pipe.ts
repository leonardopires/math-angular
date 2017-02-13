import { Pipe, PipeTransform } from '@angular/core';
const math = require('mathjs');

@Pipe({
  name: 'mathDerivative'
})
export class MathDerivativePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    try{
      const variables = value.filter(n => n.isSymbolNode);
      return math.derivative(value.toString(), variables ? variables[0] : 'x');
    } catch (ex){
      return value + ' - exception: ' + ex;
    }
  }

}
