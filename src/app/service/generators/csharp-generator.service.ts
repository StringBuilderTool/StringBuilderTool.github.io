import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsharpGeneratorService {

  constructor() {
    // Empty
  }

  public generate(inputText: string): string {
    let resultString: string = 'const string yourString = ';

    const lines = inputText.split('\n');

    for (const line of lines) {
      const lastLine: boolean = lines.indexOf(line) === lines.length - 1;

      resultString = resultString.concat(`"${line}" ${lastLine ? ';' : '+'}\n`);
    }

    return resultString;
  }
}
