import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recepcion-documentos',
  templateUrl: './recepcion-documentos.component.html',
  styleUrls: ['./recepcion-documentos.component.css']
})
export class RecepcionDocumentosComponent implements OnInit{
  formulario: FormGroup = new FormGroup({});
      

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      archivo: [null, Validators.required]
    });
  }

  enviarDatos() {
    // Código para enviar los datos del formulario
  }

  onArchivoSeleccionado(event: Event) {
    // Código para procesar la selección del archivo
  }
}
