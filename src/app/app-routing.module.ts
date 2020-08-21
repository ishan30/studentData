import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'data', component: StudentsComponent},
  { path: 'dashboard' , component : DashboardComponent},
  { path:'' , redirectTo : '/dashboard' , pathMatch: 'full'}

];
//path => URL that we enter in the browser
// Component=> corresoding component to navigate
// pathMatch -> prefix or full 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
