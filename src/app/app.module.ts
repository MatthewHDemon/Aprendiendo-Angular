import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './components/my-component/my-component.component';
import { MovieComponent } from './components/movie/movie.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    MovieComponent,
    PruebasComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
