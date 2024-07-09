import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-questions-drop-area',
  templateUrl: './questions-drop-area.component.html',
  styleUrls: ['./questions-drop-area.component.scss'],
})
export class QuestionsDropAreaComponent {
  questions: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    this.questions = [];

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      const newQuestion = event.previousContainer.data[event.previousIndex];
      this.questions.push(newQuestion);
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }
}
