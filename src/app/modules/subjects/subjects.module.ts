import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { AllSubjectComponent } from './all-subject/subject.component';
import { QuestionsComponent } from './all-subject/questions/questions.component';
import { SubjectsComponent } from './all-subject/subjects/subjects.component';

@NgModule({
  declarations: [AllSubjectComponent, QuestionsComponent, SubjectsComponent],
  imports: [CommonModule, SubjectsRoutingModule],
})
export class SubjectsModule {}
