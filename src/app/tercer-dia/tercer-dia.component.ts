import { Component } from '@angular/core';
import { ExampleService } from '../service/example.service';

@Component({
  selector: 'app-tercer-dia',
  standalone: true,
  imports: [],
  templateUrl: './tercer-dia.component.html',
  styleUrl: './tercer-dia.component.scss'
})
export class TercerDiaComponent {
constructor(service: ExampleService){


}
}
