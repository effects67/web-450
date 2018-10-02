import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMicroComponent } from './quiz-micro.component';

describe('QuizMicroComponent', () => {
  let component: QuizMicroComponent;
  let fixture: ComponentFixture<QuizMicroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizMicroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
