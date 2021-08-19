import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImcCalComponent } from './imc-cal/imc-cal.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


const routes: Routes = [{ path: "imccalculator", component: ImcCalComponent,},
                        { path:"todolist", component: ToDoListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
