import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotePFEComponent } from './note-pfe.component';

describe('NotePFEComponent', () => {
  let component: NotePFEComponent;
  let fixture: ComponentFixture<NotePFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotePFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
