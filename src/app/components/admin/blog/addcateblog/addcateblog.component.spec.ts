import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcateblogComponent } from './addcateblog.component';

describe('AddcateblogComponent', () => {
  let component: AddcateblogComponent;
  let fixture: ComponentFixture<AddcateblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcateblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
