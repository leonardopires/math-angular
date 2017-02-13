import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MjsLatexComponent } from './mjs-latex/mjs-latex.component';
import { ToTexPipe } from './to-tex.pipe';
import { MathParsePipe } from './math-parse.pipe';
import { MathEvalPipe } from './math-eval.pipe';
import { MathDerivativePipe } from './math-derivative.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MjsLatexComponent,
    ToTexPipe,
    MathParsePipe,
    MathEvalPipe,
    MathDerivativePipe,
    MathDerivativePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
