import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { TemplateListComponent } from './template-list/template-list.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "template", component: CreateTemplateComponent },
  { path: 'template/:id', component: CreateTemplateComponent },
  { path: "templatelist", component: TemplateListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }