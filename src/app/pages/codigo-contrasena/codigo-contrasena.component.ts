import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-codigo-contrasena',
  templateUrl: './codigo-contrasena.component.html',
  styleUrls: ['./codigo-contrasena.component.css']
})
export class CodigoContrasenaComponent {

  codigoForm = new FormGroup({
    codigo: new FormControl('', Validators.required)
  });


  constructor(private firestoreService: FirestoreService, private router: Router){}

  get f() {
    return this.codigoForm.controls;
  }

  validCode(codigoForm: { value: any; }): boolean {

    console.log(codigoForm.value.codigo);


    if (codigoForm.value.codigo == this.firestoreService.getGeneratedCode()){
      this.router.navigate(["/nueva-contrasena"])
      return true;
    }
    return false;
  }

}
