import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaGeneratorService {

  constructor() {
    // Empty
  }

  public generate(inputText: string): string {
    let resultString: string = 'final String yourString = ';

    const lines = inputText.split('\n');

    console.log(inputText);
    console.log(lines);

    for (const line of lines) {
      const lastLine: boolean = lines.indexOf(line) === lines.length - 1;

      resultString = resultString.concat(`"${line}"${lastLine ? ';' : '+'}\n`);
    }

    return resultString;
  }
}
