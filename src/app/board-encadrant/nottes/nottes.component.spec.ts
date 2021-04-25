import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottesComponent } from './nottes.component';

describe('NottesComponent', () => {
  let component: NottesComponent;
  let fixture: ComponentFixture<NottesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
