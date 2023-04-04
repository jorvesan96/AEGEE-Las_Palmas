import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorActividadesComponent } from './creador-actividades.component';

describe('CreadorActividadesComponent', () => {
  let component: CreadorActividadesComponent;
  let fixture: ComponentFixture<CreadorActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreadorActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
