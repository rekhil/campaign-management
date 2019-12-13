import { Component } from '@angular/core';
import { TemplateItem, Template, TemplateItemType } from '../shared/model';

@Component({
    selector: 'app-create-template',
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
    public template: Template;

    constructor() {
        this.template = new Template();
        this.template.name = "new template";
        this.template.templateItemList = [];
    }

    public addText(templateType: number) {
        const templateItem = new TemplateItem();
        templateItem.templateType = templateType;
        if (templateType == TemplateItemType.text) {
            templateItem.value = "This is a text block. You can use it to add text to your template";
        } else if (templateType == TemplateItemType.button) {
            templateItem.value = "Button Text";
        }
        this.template.templateItemList.push(templateItem);
    }
}