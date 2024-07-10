import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-single-choice-questions',
  templateUrl: './single-choice-questions.component.html',
  styleUrls: ['./single-choice-questions.component.scss'],
})
export class SingleChoiceQuestionsComponent {
  questionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _snack: MatSnackBar) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
    } else {
      this._snack.open('enter valid questions', 'X', { duration: 3000 });
    }
  }
}
