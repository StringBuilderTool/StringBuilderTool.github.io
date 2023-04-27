import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreferencesWindowComponent } from './preferences-window/preferences-window.component';
import { InputOutputTextWindowComponent } from './input-output-text-window/input-output-text-window.component';

@NgModule({
  declarations: [
    AppComponent,
    PreferencesWindowComponent,
    InputOutputTextWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
