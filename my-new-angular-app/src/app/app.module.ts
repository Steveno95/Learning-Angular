import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,
      { useHash: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
