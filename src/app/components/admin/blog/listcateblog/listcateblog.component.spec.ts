import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcateblogComponent } from './listcateblog.component';

describe('ListcateblogComponent', () => {
  let component: ListcateblogComponent;
  let fixture: ComponentFixture<ListcateblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcateblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcateblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
