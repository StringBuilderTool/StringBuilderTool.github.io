import {createAction, props} from '@ngrx/store';
import {LanguageOptionEnum} from "../../types/LanguageOption";

export interface LanguageUpdate {
  language: number
}

export const setLanguage = createAction(
  '[Preferences] Save language',
  props<{ language: number }>()
)
