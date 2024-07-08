import { Component } from '@angular/core';
import { SubjectsModel } from 'src/app/core/models/subjects-model';
import { SubjectsService } from 'src/app/core/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
})
export class SubjectsComponent {
  subjects: SubjectsModel[] = [];
  constructor(private _subjectService: SubjectsService) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this._subjectService.getSubject().subscribe({
      next: (data) => {
        this.subjects = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
