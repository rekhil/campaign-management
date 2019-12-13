import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './shared/service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { AvailableTemplateComponent } from './available-templates/available-templates.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { TemplateItemComponent } from './template-item/template-item.component';
import { ItemPropertyComponent } from './item-property/item-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateTemplateComponent,
    AvailableTemplateComponent,
    SendEmailComponent,
    TemplateItemComponent,
    ItemPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
