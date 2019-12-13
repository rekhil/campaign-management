import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { AvailableTemplateComponent } from './available-templates/available-templates.component';
import { SendEmailComponent } from './send-email/send-email.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "template", component: CreateTemplateComponent },
  { path: "templatelist", component: AvailableTemplateComponent },
  { path: "sendmail", component: SendEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }