import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {PreferencesState} from "./store/types/PreferencesState";
import {selectPreferencesFull} from "./store/preferences/preferences.selector";
import {LanguageOptionEnum} from "./types/LanguageOption";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'string-builder-tool';

  option: LanguageOptionEnum | undefined;

  constructor(private store: Store<PreferencesState>) {
    this.store.select(selectPreferencesFull).subscribe(value => {
      console.log(value);

      this.option = value.language;
    });
  }

  ngOnInit() {
  }

  protected readonly LanguageOptionEnum = LanguageOptionEnum;
}
