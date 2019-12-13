import { Component, Input } from '@angular/core';
import { TemplateItem } from '../shared/model';

@Component({
    selector: 'app-template-item',
    templateUrl: './template-item.component.html',
    styleUrls: ['./template-item.component.scss']
})
export class TemplateItemComponent {
    @Input() templateItem: TemplateItem;

    public showProperties() {
        this.templateItem.value = "clicked";
    }
}