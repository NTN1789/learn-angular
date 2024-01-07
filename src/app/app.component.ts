import { Component, OnInit,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlgoComponent } from './algo/algo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlgoComponent],
  template: `
  <app-algo title="ola mundo"></app-algo>
  <router-outlet></router-outlet>`,

})
export class AppComponent  implements OnInit {

    constructor(){

    }

    ngOnInit() :void{

    }
}
