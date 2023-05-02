import {createFeature, createReducer, on} from "@ngrx/store";
import {PreferencesState} from "../types/PreferencesState";
import * as PreferencesActions from './preferences.actions';
import {LanguageOptionEnum} from "../../types/LanguageOption";
import {preferencesKey} from "./preferences.selector";

export const initialPreferencesState: PreferencesState = {
  language: LanguageOptionEnum.JAVA
};

export const preferencesReducer = createReducer(
  initialPreferencesState,
  on(PreferencesActions.setLanguage, (state, value) => ({...state, language: value.language})),
)

export const preferencesFeature = createFeature({
  name: preferencesKey,
  reducer: preferencesReducer
})
