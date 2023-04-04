import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionDocumentosComponent } from './recepcion-documentos.component';

describe('RecepcionDocumentosComponent', () => {
  let component: RecepcionDocumentosComponent;
  let fixture: ComponentFixture<RecepcionDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcionDocumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcionDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
