import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-output-text-window',
  templateUrl: './input-output-text-window.component.html',
  styleUrls: ['./input-output-text-window.component.sass']
})
export class InputOutputTextWindowComponent implements OnInit {
  outputText: string;
  inputText: string;

  constructor() {
    this.inputText = 'Place your input string here...'
    this.outputText = 'Your generated string will appear here...'
  }

  ngOnInit(): void {
    // Empty
  }

  clear(): void {
    this.inputText = '';
    this.outputText = '';
  }

  generate() {
  }
}
