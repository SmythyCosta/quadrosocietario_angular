import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaExibeSociosComponent } from './empresa-exibe-socios.component';

describe('EmpresaExibeSociosComponent', () => {
  let component: EmpresaExibeSociosComponent;
  let fixture: ComponentFixture<EmpresaExibeSociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaExibeSociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaExibeSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
