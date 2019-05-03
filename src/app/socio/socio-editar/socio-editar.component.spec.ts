import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioEditarComponent } from './socio-editar.component';

describe('SocioEditarComponent', () => {
  let component: SocioEditarComponent;
  let fixture: ComponentFixture<SocioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
