import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlanadosComponent } from './llanados.component';

describe('LlanadosComponent', () => {
  let component: LlanadosComponent;
  let fixture: ComponentFixture<LlanadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlanadosComponent]
    });
    fixture = TestBed.createComponent(LlanadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
