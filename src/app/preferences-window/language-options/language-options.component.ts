import {Component, OnInit} from '@angular/core';
import {LanguageOptionEnum} from "../../types/LanguageOption";
import {FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as PreferencesActions from '../../store/preferences/preferences.actions';
import {LanguageUpdate} from "../../store/preferences/preferences.actions";
import {selectPreferencesFull} from "../../store/preferences/preferences.selector";

interface LanguageOption {
  id: number,
  name: string
}

@Component({
  selector: 'app-language-options',
  templateUrl: './language-options.component.html',
  styleUrls: ['./language-options.component.sass']
})
export class LanguageOptionsComponent implements OnInit {

  languageOptions: LanguageOption[] = [{
    id: LanguageOptionEnum.JAVA,
    name: 'Java'
  }, {
    id: LanguageOptionEnum.CSHARP,
    name: 'C#'
  }, {
    id: LanguageOptionEnum.CPP,
    name: 'C++'
  }];
  selectedLanguageOptionFormControl: FormControl = new FormControl<number>(1);

  constructor(private readonly store: Store) {
  }

  public ngOnInit(): void {

  }

  public changeValue(): void {
    const languageUpdate: LanguageUpdate = {
      language: this.selectedLanguageOptionFormControl.value
    };

    this.store.dispatch(PreferencesActions.setLanguage(languageUpdate));
  }

}
