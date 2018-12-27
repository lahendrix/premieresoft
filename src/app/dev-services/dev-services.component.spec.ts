import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevServicesComponent } from './dev-services.component';

describe('DevServicesComponent', () => {
  let component: DevServicesComponent;
  let fixture: ComponentFixture<DevServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
