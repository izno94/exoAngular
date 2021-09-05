import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc-cal',
  templateUrl: './imc-cal.component.html',
  styleUrls: ['./imc-cal.component.css']
})
export class ImcCalComponent implements OnInit {
     
     poids: number;
     taille: number;
     result: any;
     

  constructor() { }
  

  ngOnInit() {
  
  }
  onClick(){ 
    this.result = console.log(this.poids / this.taille ** 2 * 10000)
  } 

  onKey(event: any){
    this.poids = event.target.value
  }
  onKeyTwo(event: any){
    this.taille = event.target.value
  }
  
}
