import { Component } from '@angular/core';

@Component({
  selector: 'app-all-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class AllSubjectComponent {
  subject: boolean = true;
  displaySubject() {
    this.subject = true;
  }

  displayQuestions() {
    this.subject = false;
  }
}
