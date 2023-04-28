import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaGeneratorService {

  constructor() { }

  public generate(inputText: string): string {
    return "javinha gerou" + inputText;
  }
}
