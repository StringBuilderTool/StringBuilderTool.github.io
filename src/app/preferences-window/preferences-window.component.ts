import {Component, OnInit} from '@angular/core';
import {WindowTab} from "../types/Tab";
import {LanguageOptionsComponent} from "./language-options/language-options.component";
import {VariableOptionsComponent} from "./variable-options/variable-options.component";
import {LineEndingSpacingOptionsComponent} from "./line-ending-spacing-options/line-ending-spacing-options.component";

@Component({
  selector: 'app-preferences-window',
  templateUrl: './preferences-window.component.html',
  styleUrls: ['./preferences-window.component.sass']
})
export class PreferencesWindowComponent implements OnInit {

  readonly windowTitleBar: string = 'Preferences';
  readonly windowButtons: string[] = ['Minimize', 'Maximize', 'Close'];

  protected windowTabs: WindowTab[] = [{
    id: 'tab-language',
    title: 'Language',
    selected: true,
    component: LanguageOptionsComponent
  }, {
    id: 'tab-variable',
    title: 'Variable options',
    selected: false,
    component: VariableOptionsComponent
  }, {
    id: 'tab-line-ending-spacing',
    title: 'Line ending/spacing',
    selected: false,
    component: LineEndingSpacingOptionsComponent
  }];

  constructor() {
    // Empty
  }

  ngOnInit(): void {
    // Empty
  }

  changeSelectedTab(selectedTab: WindowTab): void {
    if (selectedTab.selected)
      return;

    this.windowTabs.forEach(tab => {
      tab.selected = selectedTab.id === tab.id
    })
  }

}
