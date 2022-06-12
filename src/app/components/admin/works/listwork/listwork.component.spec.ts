import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListworkComponent } from './listwork.component';

describe('ListworkComponent', () => {
  let component: ListworkComponent;
  let fixture: ComponentFixture<ListworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
