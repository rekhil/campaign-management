import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemplateItem } from '../shared/model';

@Component({
    selector: 'app-item-property',
    templateUrl: './item-property.component.html',
    styleUrls: ['./item-property.component.scss']
})
export class ItemPropertyComponent {
    @Input() templateItem: TemplateItem;
    @Output() closePropertyDetailsEmitter: EventEmitter<any>;
    @Output() deleteItemEmitter: EventEmitter<any>;

    constructor() {
        this.closePropertyDetailsEmitter = new EventEmitter<any>();
        this.deleteItemEmitter = new EventEmitter<any>();
    }

    public close() {
        this.closePropertyDetailsEmitter.emit();
    }

    public delete() {
        this.deleteItemEmitter.emit();
    }
}