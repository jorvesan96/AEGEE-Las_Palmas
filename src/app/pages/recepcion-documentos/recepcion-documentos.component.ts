import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recepcion-documentos',
  templateUrl: './recepcion-documentos.component.html',
  styleUrls: ['./recepcion-documentos.component.css']
})
export class RecepcionDocumentosComponent implements OnInit{
  formulario = new FormGroup({
    dni: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/[a-zA-Z0-9]+/),
    ]),
    archivo: new FormControl<string | null>(null),
  });
  archivoSeleccionado?: File;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      dni: ['', Validators.required],
      archivo: ['', Validators.required, { updateOn: 'submit' }]
    });
  }

  esAlfanumerico(control: FormControl): { [key: string]: any } | null {
    const patron = /^[A-Z0-9]*$/;
    if (!control.value || patron.test(control.value)) {
      return null;
    } else {
      return { 'noAlfanumerico': true };
    }
  }
  

  onArchivoSeleccionado(evento: Event): void {
    const archivoSeleccionado = (evento.target as HTMLInputElement).files?.[0];
    if (archivoSeleccionado) {
      const lector = new FileReader();
      lector.readAsDataURL(archivoSeleccionado);
      lector.onload = () => {
        this.formulario.patchValue({
          archivo: lector.result?.toString() || null
        });
      };
    }
  }
  

  enviarDatos(): void {
    // Código para enviar los datos
  }
}
