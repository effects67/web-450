import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCiComponent } from './quiz-ci.component';

describe('QuizCiComponent', () => {
  let component: QuizCiComponent;
  let fixture: ComponentFixture<QuizCiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizCiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
