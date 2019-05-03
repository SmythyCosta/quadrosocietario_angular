import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioCadastrarComponent } from './socio-cadastrar.component';

describe('SocioCadastrarComponent', () => {
  let component: SocioCadastrarComponent;
  let fixture: ComponentFixture<SocioCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
