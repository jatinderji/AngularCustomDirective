import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedColorDirectiveDirective } from './myDirectives/red-color-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedColorDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
