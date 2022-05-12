import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApurvaComponent } from './apurva.component';

describe('ApurvaComponent', () => {
  let component: ApurvaComponent;
  let fixture: ComponentFixture<ApurvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApurvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApurvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
