import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSubjectComponent } from './all-subject/subject.component';

const routes: Routes = [{ path: '', component: AllSubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
