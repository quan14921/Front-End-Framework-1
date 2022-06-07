import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsWedsiteComponent } from './layouts-wedsite.component';

describe('LayoutsWedsiteComponent', () => {
  let component: LayoutsWedsiteComponent;
  let fixture: ComponentFixture<LayoutsWedsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutsWedsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsWedsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
