import { Component } from '@angular/core';
import { ExampleService } from '../service/example.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {

  name='';
  users:any=[]
 constructor(public exampleService:ExampleService){
 }

 ngOnInit() {
  this.exampleService.obtenerlista().subscribe(resp=> {
    console.log(resp);
    this.users= resp;
  })
 }
}
