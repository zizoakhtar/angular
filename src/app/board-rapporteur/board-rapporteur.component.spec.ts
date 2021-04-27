import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRapporteurComponent } from './board-rapporteur.component';

describe('BoardRapporteurComponent', () => {
  let component: BoardRapporteurComponent;
  let fixture: ComponentFixture<BoardRapporteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRapporteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRapporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
