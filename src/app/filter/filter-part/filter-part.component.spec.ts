import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPartComponent } from './filter-part.component';

describe('FilterPartComponent', () => {
  let component: FilterPartComponent;
  let fixture: ComponentFixture<FilterPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
