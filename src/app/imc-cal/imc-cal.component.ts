import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-cal',
  templateUrl: './imc-cal.component.html',
  styleUrls: ['./imc-cal.component.css']
})
export class ImcCalComponent implements OnInit {
     
     poids: any = [];
     taille: any = [];
     result: any = [];
     

  constructor() { }
  

  ngOnInit() {
  
  }
  onClick(){ 
    this.result = console.log(this.poids + this.taille)
  } 

  onKey(event: any){
    this.poids = event.target.value
  }
  onKeyTwo(event: any){
    this.taille = event.target.value
  }
  
}
