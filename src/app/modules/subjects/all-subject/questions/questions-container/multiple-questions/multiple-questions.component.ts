import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-questions',
  templateUrl: './multiple-questions.component.html',
  styleUrls: ['./multiple-questions.component.scss'],
})
export class MultipleQuestionsComponent {
  questionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
    });
  }
}
