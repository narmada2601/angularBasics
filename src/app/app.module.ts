import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstlevelComponent } from './firstlevel/firstlevel.component';
import { SecondLevelComponent } from './second-level/second-level.component';
import { ThirdLevelComponent } from './third-level/third-level.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstlevelComponent,
    SecondLevelComponent,
    ThirdLevelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }