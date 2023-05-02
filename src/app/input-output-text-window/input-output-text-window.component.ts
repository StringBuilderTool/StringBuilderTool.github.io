import {Component, OnInit} from '@angular/core';
import {GeneratorService} from "../service/generator.service";
import {FormControl} from "@angular/forms";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-input-output-text-window',
  templateUrl: './input-output-text-window.component.html',
  styleUrls: ['./input-output-text-window.component.sass']
})
export class InputOutputTextWindowComponent implements OnInit {
  outputText: string;
  inputText: FormControl<string | null> = new FormControl<string>('Place your input string here...');

  constructor(private readonly generatorService: GeneratorService,
              private readonly clipboard: Clipboard) {
    this.outputText = 'Your generated string will appear here...'
  }

  ngOnInit(): void {
    // Empty
  }

  clear(): void {
    this.outputText = '';
    this.inputText.setValue('');
  }

  generate() {
    this.outputText = this.generatorService.generateString(this.inputText.value!);
  }

  copyToClipboard() {
    this.clipboard.copy(this.outputText);
  }
}
