import {Component, OnInit} from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent implements OnInit {

   message: string = '';

   constructor(private dataService: DataService) {
   }
   ngOnInit() {
     this.message = this.dataService.getMessage();
   }

}
