import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheStagesComponent } from './affiche-stages.component';

describe('AfficheStagesComponent', () => {
  let component: AfficheStagesComponent;
  let fixture: ComponentFixture<AfficheStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
