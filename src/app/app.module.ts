import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { StudentAdComponent } from './student-ad/student-ad.component';
import { DepartmentAdComponent } from './department-ad/department-ad.component';
import { AdDirective } from './ad.directive';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { TemlateDrivenFormDemoComponent } from './temlate-driven-form-demo/temlate-driven-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    DashboardComponent,
    AdbannerComponent,
    StudentAdComponent,
    DepartmentAdComponent,
    AdDirective,
    FormsDemoComponent,
    TemlateDrivenFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
