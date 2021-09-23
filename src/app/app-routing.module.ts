import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImcCalComponent } from './imc-cal/imc-cal.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';


export const routes: Routes = [
                               { path:"imccalculator", component: ImcCalComponent},
                               { path:"todolist", component: ToDoListComponent},
                               { path:"formulaire", component: FormulaireComponent},
                               { path:"homepage", component: HomePageComponent},
                               { path: "", component: HomePageComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
