import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
const katex = require('katex');

@Pipe({
  name: 'toTex'
})
export class ToTexPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){
  }

  transform(value: any, args?: any): any {

    try {
      const tex = value.toTex();
      return this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(tex));
    } catch (ex) {
     return value + ' - exception: ' + ex;
    }
  }

}
