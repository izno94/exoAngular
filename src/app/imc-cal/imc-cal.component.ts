import { NgClass } from '@angular/common';
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
    this.result = Math.round(this.poids / this.taille ** 2 * 10000)
    if (this.result <= 18) {
      this.result = this.result + " TTrop maigre !!!!! MANGE MANGE !!!!!"
    }
    if (this.result > 18 && this.result <= 25 ) {
      this.result = this.result + " Tu es au summum"
    }
    if (this.result > 25 && this.result <= 30 ) {
      this.result = this.result + " tu es en surpoid"
    }
    if (this.result > 30 && this.result <= 35 ) {
      this.result = this.result + " Obésité modérée"
    }
    if (this.result > 35 && this.result <= 40 ) {
      this.result = this.result + " Obésité sévère"
    }
    if (this.result > 40 ) {
      this.result = this.result + " Obésité morbide ou massive"
    }
  } 

  onKey(event: any){
    this.poids = event.target.value
  }
  onKeyTwo(event: any){
    this.taille = event.target.value
  }
  
}
