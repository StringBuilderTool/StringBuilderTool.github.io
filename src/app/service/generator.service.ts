import {Injectable} from '@angular/core';
import {PreferencesState} from "../store/types/PreferencesState";
import {Store} from "@ngrx/store";
import {LanguageOptionEnum} from "../types/LanguageOption";
import {JavaGeneratorService} from "./generators/java-generator.service";
import {selectPreferencesFull} from "../store/preferences/preferences.selector";
import {CppGeneratorService} from "./generators/cpp-generator.service";
import {CsharpGeneratorService} from "./generators/csharp-generator.service";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private preferences: PreferencesState | undefined;

  private readonly languageGeneratorMap: Map<LanguageOptionEnum, Function> = new Map<LanguageOptionEnum, Function>([
    [LanguageOptionEnum.JAVA, this.javaGeneratorService.generate],
    [LanguageOptionEnum.CSHARP, this.csharpGeneratorService.generate],
    [LanguageOptionEnum.CPP, this.cppGeneratorService.generate],
  ]);

  constructor(
    private readonly store: Store<PreferencesState>,
    private readonly javaGeneratorService: JavaGeneratorService,
    private readonly csharpGeneratorService: CsharpGeneratorService,
    private readonly cppGeneratorService: CppGeneratorService
  ) {
    this.store.select(selectPreferencesFull).subscribe(value => {
      this.preferences = value;
    });
  }

  public generateString(inputText: string) {
    const emptyInputText: boolean = inputText === undefined || !inputText.trim();
    const unavailablePreferences: boolean = this.preferences === undefined;

    if (emptyInputText)
      return "Type something my man..."

    if (unavailablePreferences)
      return "ERROR";

    const selectedLanguageOption: LanguageOptionEnum = this.preferences!.language;
    const generateFunction: Function = this.languageGeneratorMap.get(parseInt(selectedLanguageOption.toString()))!;

    return generateFunction(inputText);
  }
}
