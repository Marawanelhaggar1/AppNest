import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multiple-questions',
  templateUrl: './multiple-questions.component.html',
  styleUrls: ['./multiple-questions.component.scss'],
})
export class MultipleQuestionsComponent {
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
