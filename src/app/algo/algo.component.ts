import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-algo',
  standalone: true,
  imports: [],
  templateUrl: './algo.component.html',
  styleUrl: './algo.component.scss'
})
export class AlgoComponent  implements OnInit, OnChanges	 {
 @Input() public title:string = "Bem vindo Zé";


  constructor() { }
  ngOnChanges(): void {
    // input serve para receber dados de outro component
    console.log("alterado com sucesso ")
    console.log(this.title) // ola mundo vai retornar
  }


  ngOnInit(): void {
    // ciclo de vida do angular

  }

}
