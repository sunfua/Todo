import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTraceComponent } from './items-trace.component';

describe('ItemsTraceComponent', () => {
  let component: ItemsTraceComponent;
  let fixture: ComponentFixture<ItemsTraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
