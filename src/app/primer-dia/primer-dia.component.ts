import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input()ejemplo:string=''
  card ={
    title: 'Descrición',
    description: "Esta es mi primera pagina de bootcamp",
    }
}
