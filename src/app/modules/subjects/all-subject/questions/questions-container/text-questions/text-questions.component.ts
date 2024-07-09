import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-questions',
  templateUrl: './text-questions.component.html',
  styleUrls: ['./text-questions.component.scss'],
})
export class TextQuestionsComponent {
  questionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
    });
  }
}
