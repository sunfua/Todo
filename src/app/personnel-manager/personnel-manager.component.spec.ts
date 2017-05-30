import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelManagerComponent } from './personnel-manager.component';

describe('PersonnelManagerComponent', () => {
  let component: PersonnelManagerComponent;
  let fixture: ComponentFixture<PersonnelManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
