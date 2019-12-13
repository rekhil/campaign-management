import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { TemplateComponent } from './';
// import { TemplateListComponent } from './';
// import { SendMailComponent } from './';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  // { path: "template", component: TemplateComponent },
  // { path: "templatelist", component: TemplateListComponent },
  // { path: "sendmail", component: SendMailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }