import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InputOutputTextWindowComponent} from './input-output-text-window/input-output-text-window.component';
import {PreferencesWindowModule} from "./preferences-window/preferences-window.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {preferencesFeature} from "./store/preferences/preferences.reducer";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputTextWindowComponent,
  ],
  imports: [
    BrowserModule, PreferencesWindowModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(preferencesFeature),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
