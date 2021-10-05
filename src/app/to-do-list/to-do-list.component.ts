import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  public todo
  public importData

  constructor() {
    this.todo = []
   }

  ngOnInit() {
  }

add(){
  this.todo.push(this.importData)
  
}

delete(index){
  this.todo.splice(index,1)
}

}
