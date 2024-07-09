import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { AllSubjectComponent } from './all-subject/subject.component';
import { QuestionsComponent } from './all-subject/questions/questions.component';
import { SubjectsComponent } from './all-subject/subjects/subjects.component';
import { QuestionsTypeComponent } from './all-subject/questions/questions-type/questions-type.component';
import { QuestionsDropAreaComponent } from './all-subject/questions/questions-drop-area/questions-drop-area.component';
import { AngularMatModule } from 'src/app/shared/angular-mat/angular-mat.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QuestionsContainerComponent } from './all-subject/questions/questions-container/questions-container.component';
import { MultipleQuestionsComponent } from './all-subject/questions/questionsContainer/multiple-questions/multiple-questions.component';
import { SingleChoiceQuestionsComponent } from './all-subject/questions/questionsContainer/single-choice-questions/single-choice-questions.component';
import { TextQuestionsComponent } from './all-subject/questions/questionsContainer/text-questions/text-questions.component';

@NgModule({
  declarations: [
    AllSubjectComponent,
    QuestionsComponent,
    SubjectsComponent,
    QuestionsTypeComponent,
    QuestionsDropAreaComponent,
    QuestionsContainerComponent,
    MultipleQuestionsComponent,
    SingleChoiceQuestionsComponent,
    TextQuestionsComponent,
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    AngularMatModule,
    DragDropModule,
  ],
})
export class SubjectsModule {}
