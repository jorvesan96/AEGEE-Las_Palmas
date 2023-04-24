import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoContrasenaComponent } from './codigo-contrasena.component';

describe('CodigoContrasenaComponent', () => {
  let component: CodigoContrasenaComponent;
  let fixture: ComponentFixture<CodigoContrasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoContrasenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
