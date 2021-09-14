import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  resultat : FormGroup ;


  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.resultat = this.fb.group({
      civilite : [],
      nom : [],
      prenom : [],
      birthday : [],
      email: [],
      commentaire : []
    });

    
  }



  onClick(){
    console.log(this.resultat.value)
  } 
}
