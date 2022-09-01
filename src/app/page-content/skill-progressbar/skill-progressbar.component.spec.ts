import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillProgressbarComponent } from './skill-progressbar.component';

describe('SkillProgressbarComponent', () => {
  let component: SkillProgressbarComponent;
  let fixture: ComponentFixture<SkillProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillProgressbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
