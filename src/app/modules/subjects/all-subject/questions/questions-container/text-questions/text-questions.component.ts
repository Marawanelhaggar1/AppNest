import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-text-questions',
  templateUrl: './text-questions.component.html',
  styleUrls: ['./text-questions.component.scss'],
})
export class TextQuestionsComponent {
  questionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _snack: MatSnackBar) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      const draftData = {
        ...this.questionForm.value,
        type: 'نص',
        status: 'draft',
      };
      console.log('Draft Saved:', draftData);
      if (localStorage.getItem('questions')) {
        const questions = JSON.parse(localStorage.getItem('questions')!);
        questions.push(draftData);
        localStorage.setItem('questions', JSON.stringify(questions));
      } else {
        localStorage.setItem('questions', JSON.stringify([draftData]));
      }
    } else {
      this._snack.open('enter valid questions', 'X', { duration: 3000 });
    }
  }
}
