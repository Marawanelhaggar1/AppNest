import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDropAreaComponent } from './questions-drop-area.component';

describe('QuestionsDropAreaComponent', () => {
  let component: QuestionsDropAreaComponent;
  let fixture: ComponentFixture<QuestionsDropAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsDropAreaComponent]
    });
    fixture = TestBed.createComponent(QuestionsDropAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
