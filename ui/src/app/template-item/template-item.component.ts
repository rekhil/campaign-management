import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemplateItem } from '../shared/model';

@Component({
    selector: 'app-template-item',
    templateUrl: './template-item.component.html',
    styleUrls: ['./template-item.component.scss']
})
export class TemplateItemComponent {
    @Input() templateItem: TemplateItem;
    @Output() showPropertyWindow: EventEmitter<any>;

    constructor() {
        this.showPropertyWindow = new EventEmitter<any>();
    }

    public showProperties() {
        this.showPropertyWindow.emit(this.templateItem);
    }
}