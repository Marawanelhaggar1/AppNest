import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-choice-questions',
  templateUrl: './single-choice-questions.component.html',
  styleUrls: ['./single-choice-questions.component.scss'],
})
export class SingleChoiceQuestionsComponent {
  questionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
    });
  }
}
