import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-protecto-final',
  standalone: true,
  imports: [GoogleMapsModule,ReactiveFormsModule,FormsModule],
  templateUrl: './protecto-final.component.html',
  styleUrl: './protecto-final.component.scss'
})
export class ProtectoFinalComponent {
  formulariouser:FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
   })
   name= ''
   description=''
   submitForm(){
    let obj={
    name:this.name,
     description:this.description
    }
  console.log(this.formulariouser.value);  
  }
  
}