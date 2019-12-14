import { Component } from '@angular/core';
import { TemplateItem, Template, TemplateItemType } from '../shared/model';
import { DataService } from '../shared/service';

@Component({
    selector: 'app-create-template',
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
    public template: Template;
    public selectedItem = new TemplateItem();
    public showProperty: boolean;
    public get saveButtonText(): string {
        return this.template.templateId == 0 ? "Save Mail Template" : "Update Mail Template";
    }

    constructor(public dataService: DataService) {
        this.createNewObject();
    }

    public createNewObject() {
        this.template = new Template();
        this.template.templateId = 0;
        this.template.name = "new template";
        this.template.templateItemList = [];
        this.showProperty = false;
    }

    public addText(templateType: number) {
        const templateItem = new TemplateItem();
        templateItem.templateType = templateType;
        if (templateType == TemplateItemType.text) {
            templateItem.value = "This is a text block. You can use it to add text to your template";
        } else if (templateType == TemplateItemType.button) {
            templateItem.width = 100;
            templateItem.value = "Button Text";
        }
        this.template.templateItemList.push(templateItem);
    }

    public showPropertyWindow(selectedItem: TemplateItem) {
        this.selectedItem = selectedItem;
        this.showProperty = true;
    }

    public closePropertyWindow() {
        this.showProperty = false;
    }

    public deleteItem() {
        this.showProperty = false;
        var index = this.template.templateItemList.indexOf(this.selectedItem);
        this.template.templateItemList.splice(index, 1);
    }

    public moveUpItem() {
        var index = this.template.templateItemList.indexOf(this.selectedItem);
        if (index == 0) {
            return;
        }
        var itemToMove = this.template.templateItemList.splice(index, 1);
        const copyList = []
        this.template.templateItemList.forEach((element, i) => {
            if (i === index - 1) {
                copyList.push(itemToMove[0]);
            }
            copyList.push(element);
        });
        this.template.templateItemList.length = 0;
        copyList.forEach(element => {
            this.template.templateItemList.push(element);
        });
    }

    public moveDownItem() {
        var index = this.template.templateItemList.indexOf(this.selectedItem);
        if (index == this.template.templateItemList.length - 1) {
            return;
        }
        var itemToMove = this.template.templateItemList.splice(index, 1);
        const copyList = []
        this.template.templateItemList.forEach((element, i) => {
            copyList.push(element);
            if (i === index) {
                copyList.push(itemToMove[0]);
            }
        });
        this.template.templateItemList.length = 0;
        copyList.forEach(element => {
            this.template.templateItemList.push(element);
        });
    }

    public saveMailTemplate() {
        this.dataService.createTemplateDetails(this.template).subscribe(
            (sucessResponse) => {
                this.template.templateId = sucessResponse.templateId;
            },
            (errorResponse) => {

            }
        );
    }

    public sendMail() {

    }
}