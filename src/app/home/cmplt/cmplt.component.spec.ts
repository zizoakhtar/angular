import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpltComponent } from './cmplt.component';

describe('CmpltComponent', () => {
  let component: CmpltComponent;
  let fixture: ComponentFixture<CmpltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
