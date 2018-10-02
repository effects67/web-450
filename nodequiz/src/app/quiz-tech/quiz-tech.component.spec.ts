import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTechComponent } from './quiz-tech.component';

describe('QuizTechComponent', () => {
  let component: QuizTechComponent;
  let fixture: ComponentFixture<QuizTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
