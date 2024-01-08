import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked ,AfterViewInit, AfterViewChecked  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlgoComponent } from './algo/algo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlgoComponent],
  template: `
  {{valor}}
  <button (click)="adicionar()">Incrementar</button>
   <br>
  <app-algo  *ngIf="destruir"  title="ola mundo"></app-algo>
  <br>
  <button (click)="destruirComponente()"> Destruir evento </button>
  <router-outlet></router-outlet>`,

})
export class AppComponent  implements OnInit ,  DoCheck, AfterContentInit, AfterContentChecked ,AfterViewInit, AfterViewChecked{
    public valor:number = 1;
    constructor(){

    }


    public adicionar():number{
      return this.valor += 1;
    }

    public destruir:boolean = true;

    public destruirComponente():void{
        this.destruir = false;
    }

  ngAfterViewChecked(): void {
    console.log("ngAfterView");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");


  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
      console.log("ngDoCheck");
  }

    ngOnInit() :void{

    }
}
