import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechaSubidaComponent } from './flecha-subida.component';

describe('FlechaSubidaComponent', () => {
  let component: FlechaSubidaComponent;
  let fixture: ComponentFixture<FlechaSubidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlechaSubidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlechaSubidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
