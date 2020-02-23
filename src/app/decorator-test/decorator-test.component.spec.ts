import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorTestComponent } from './decorator-test.component';

describe('DecoratorTestComponent', () => {
  let component: DecoratorTestComponent;
  let fixture: ComponentFixture<DecoratorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
