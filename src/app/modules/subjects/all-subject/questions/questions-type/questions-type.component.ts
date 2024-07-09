import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-type',
  templateUrl: './questions-type.component.html',
  styleUrls: ['./questions-type.component.scss'],
})
export class QuestionsTypeComponent {
  questionTypes = ['اسحب نوع السؤال', 'اختيار من متعدد', 'اختيار فردي', 'نص'];
}
