import { Pipe, PipeTransform } from '@angular/core';
import * as math from 'mathjs';
import MathNode = mathjs.MathNode;

@Pipe({
  name: 'mathEval'
})
export class MathEvalPipe implements PipeTransform {

  transform(value: MathNode, args?: any): any {
    try {
      const variables = value.filter(n => n.isSymbolNode);
      const scope: any = {};
      variables.forEach(n => scope[n.name] = n);

      console.log(scope);
      return (value.compile().eval(scope).valueOf());
    } catch (ex){
      return value + ' - exception: ' + ex;
    }
  }

}
