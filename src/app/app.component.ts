import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlgoComponent } from './algo/algo.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AlgoComponent,DataBidingComponent, DiretivasEstruturaisComponent],
  template: `
  {{valor}}
  <button (click)="adicionar()">Incrementar</button>
  <br>
  <app-algo  *ngIf="destruir"  title="ola mundo"></app-algo>
  <br>
  <button (click)="destruirComponente()"> Destruir evento </button>
  <app-data-biding></app-data-biding>
  <app-diretivas-estruturais></app-diretivas-estruturais>

 <router-outlet></router-outlet>`,

})
export class AppComponent  implements OnInit {
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


    ngOnInit() :void{ }
}
