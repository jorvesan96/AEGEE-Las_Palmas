import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesLocalesComponent } from './actividades-locales.component';

describe('ActividadesLocalesComponent', () => {
  let component: ActividadesLocalesComponent;
  let fixture: ComponentFixture<ActividadesLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadesLocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
