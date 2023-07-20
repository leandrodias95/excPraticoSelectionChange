import { Component } from '@angular/core';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent {
disabled= false;
message: String="";
  constructor(){}
selectedOption = "house";
  ngOnInit(){

  }

  selectionChange(event:any){
    console.log(event);
    this.selectedOption= event.value;
    this.disabled=true;
switch(this.selectedOption){
case "house": this.message= "é uma boa escolha para sua familia morar!"
  break;
  case "apartament": this.message= "é uma boa escolha para sua familia residir!"
  break;
  case "beach-house": this.message= "é uma boa escolha para sua familia relaxar!"
  break;
  case "party-house": this.message= "é uma boa escolha para sua familia festejar!"
  break;
    }
  }

}
