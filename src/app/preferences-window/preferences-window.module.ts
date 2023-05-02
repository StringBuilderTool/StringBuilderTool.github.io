import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PreferencesWindowComponent} from "./preferences-window.component";
import {LanguageOptionsComponent} from "./language-options/language-options.component";
import {VariableOptionsComponent} from "./variable-options/variable-options.component";
import {LineEndingSpacingOptionsComponent} from "./line-ending-spacing-options/line-ending-spacing-options.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PreferencesWindowComponent,
    LanguageOptionsComponent,
    VariableOptionsComponent,
    LineEndingSpacingOptionsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgOptimizedImage
    ],
  exports: [PreferencesWindowComponent]
})
export class PreferencesWindowModule {
}
