import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  resultat : any = "" ;


  constructor() { }

  ngOnInit() {
  }



  onClick(){
    console.log(this.resultat)
  } 
}
