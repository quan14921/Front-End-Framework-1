import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcateworkComponent } from './addcatework.component';

describe('AddcateworkComponent', () => {
  let component: AddcateworkComponent;
  let fixture: ComponentFixture<AddcateworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcateworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcateworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
