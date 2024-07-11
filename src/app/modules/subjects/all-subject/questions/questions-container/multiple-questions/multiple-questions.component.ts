import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multiple-questions',
  templateUrl: './multiple-questions.component.html',
  styleUrls: ['./multiple-questions.component.scss'],
})
export class MultipleQuestionsComponent {
  questionForm: FormGroup;
  // choices = Array(2).fill(0);
  constructor(private _formBuilder: FormBuilder, private _snack: MatSnackBar) {
    this.questionForm = this._formBuilder.group({
      question: ['', [Validators.required]],
      difficulty: ['', [Validators.required]],
      choices: this._formBuilder.array([
        this.createChoice(),
        this.createChoice(),
      ]),
    });
  }

  get choices() {
    return this.questionForm.get('choices') as FormArray;
  }

  createChoice(): FormGroup {
    return this._formBuilder.group({
      text: ['', [Validators.required]],
      isCorrect: [false],
    });
  }

  addChoice() {
    this.choices.push(this.createChoice());
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log(this.questionForm.value);
      const draftData = {
        ...this.questionForm.value,
        type: 'اختيار متعدد',
        status: 'draft',
      };
      console.log('Draft Saved:', draftData);
      if (localStorage.getItem('questions')) {
        const questions = JSON.parse(localStorage.getItem('questions')!);
        questions.push(draftData);
        localStorage.setItem('questions', JSON.stringify(questions));
        this._snack.open('question Saved', 'X', { duration: 3000 });
      } else {
        localStorage.setItem('questions', JSON.stringify([draftData]));
        this._snack.open('question Saved', 'X', { duration: 3000 });
      }
    } else {
      this._snack.open('enter valid questions', 'X', { duration: 3000 });
    }
  }
}
