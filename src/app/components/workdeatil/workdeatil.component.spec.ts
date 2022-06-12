import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdeatilComponent } from './workdeatil.component';

describe('WorkdeatilComponent', () => {
  let component: WorkdeatilComponent;
  let fixture: ComponentFixture<WorkdeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkdeatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
