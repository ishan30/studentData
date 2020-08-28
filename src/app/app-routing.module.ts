import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path:'' , redirectTo : '/dashboard' , pathMatch: 'full'},
  { path: 'data', component: StudentsComponent},
  { path: 'dashboard' , component : DashboardComponent},
  { path: 'data/studentDetail/:id' ,component: StudentDetailComponent},
  { path: 'studentDetail/:id' , component : StudentDetailComponent}
 

];
//path => URL that we enter in the browser
// Component=> corresoding component to navigate
// pathMatch -> prefix or full 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
