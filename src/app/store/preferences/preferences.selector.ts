import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PreferencesState} from "../../types/store/PreferencesState";

export const preferencesKey = 'preferences';

export const selectPreferences = createFeatureSelector<PreferencesState>(preferencesKey);

export const selectPreferencesFull = createSelector(
  selectPreferences,
  (state: PreferencesState) => {
    console.log(state);

    return state;
  }
);
