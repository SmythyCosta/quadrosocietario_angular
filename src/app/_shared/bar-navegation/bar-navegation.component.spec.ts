import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarNavegationComponent } from './bar-navegation.component';

describe('BarNavegationComponent', () => {
  let component: BarNavegationComponent;
  let fixture: ComponentFixture<BarNavegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarNavegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarNavegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
