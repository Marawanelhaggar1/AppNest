import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceQuestionsComponent } from './single-choice-questions.component';

describe('SingleChoiceQuestionsComponent', () => {
  let component: SingleChoiceQuestionsComponent;
  let fixture: ComponentFixture<SingleChoiceQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleChoiceQuestionsComponent]
    });
    fixture = TestBed.createComponent(SingleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
