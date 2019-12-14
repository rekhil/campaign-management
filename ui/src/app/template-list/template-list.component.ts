import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service';
import { Template } from '../shared/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  public tempalteList: Template[];
  public imageObject: Array<object>;
  public size = { width: 1120, height: 500 };

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getAllSeriesList();
  }

  private getAllSeriesList() {
    this.dataService.getAllTemplates().subscribe(
      (data) => {
        this.tempalteList = data;
      }, (error) => {
        return;
      });
  }

  public sendNewMail(temaplte: Template) {
    this.router.navigate(['/template', temaplte.templateId]);
  }
}