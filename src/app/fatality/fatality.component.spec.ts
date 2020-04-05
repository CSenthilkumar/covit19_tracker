import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatalityComponent } from './fatality.component';

describe('FatalityComponent', () => {
  let component: FatalityComponent;
  let fixture: ComponentFixture<FatalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
