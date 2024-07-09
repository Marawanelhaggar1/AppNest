import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTypeComponent } from './questions-type.component';

describe('QuestionsTypeComponent', () => {
  let component: QuestionsTypeComponent;
  let fixture: ComponentFixture<QuestionsTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsTypeComponent]
    });
    fixture = TestBed.createComponent(QuestionsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
