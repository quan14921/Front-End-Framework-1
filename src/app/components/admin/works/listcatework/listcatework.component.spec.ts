import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcateworkComponent } from './listcatework.component';

describe('ListcateworkComponent', () => {
  let component: ListcateworkComponent;
  let fixture: ComponentFixture<ListcateworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcateworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcateworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
