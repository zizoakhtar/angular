import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAvisComponent } from './all-avis.component';

describe('AllAvisComponent', () => {
  let component: AllAvisComponent;
  let fixture: ComponentFixture<AllAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
