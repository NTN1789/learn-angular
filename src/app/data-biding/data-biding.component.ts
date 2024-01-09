import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-data-biding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss'
})
export class DataBidingComponent implements OnInit {
  public name:String = "Natan";
  public age:number = 21;

  public position: {x:number, y:number} = {x:0 , y: 0};
  constructor() { }

  ngOnInit(): void {
  }

    public checked:boolean = true;
    public imgSrc : string="https://yt3.googleusercontent.com/SePtb3p817z9mywUT6LrDp5FRpqY5WnkTjC_uBI18eZ0PuFFJaPlRKdxYaLWCnzu8AXxorTN=s176-c-k-c0x00ffffff-no-rj"
    public imgTilte :String = "ztey" ;

    public alertaInfo (valor: MouseEvent){
        console.log(valor);

    }


    public mouseMoveTeste(valor: MouseEvent){
      this.position.x = valor.offsetX;
      this.position.y = valor.offsetY;
    }



}
