import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemplateItem, TemplateItemType } from '../shared/model';

@Component({
    selector: 'app-item-property',
    templateUrl: './item-property.component.html',
    styleUrls: ['./item-property.component.scss']
})
export class ItemPropertyComponent {
    @Input() templateItem: TemplateItem;
    @Output() closePropertyDetailsEmitter: EventEmitter<any>;
    @Output() deleteItemEmitter: EventEmitter<any>;
    @Output() moveUpItemEmitter: EventEmitter<any>;
    @Output() moveDownItemEmitter: EventEmitter<any>;

    public get isValueRequired() {
        return this.templateItem.templateType == TemplateItemType.text ||
            this.templateItem.templateType == TemplateItemType.button;
    }

    public get isFontSizeRequired() {
        return this.templateItem.templateType == TemplateItemType.text ||
            this.templateItem.templateType == TemplateItemType.button;
    }

    public get isFontColorRequired() {
        return this.templateItem.templateType == TemplateItemType.text ||
            this.templateItem.templateType == TemplateItemType.button;
    }

    public get isBoldRequired() {
        return this.templateItem.templateType == TemplateItemType.text ||
            this.templateItem.templateType == TemplateItemType.button;
    }

    public get isItalicsRequired() {
        return this.templateItem.templateType == TemplateItemType.text ||
            this.templateItem.templateType == TemplateItemType.button;
    }

    public get isRedirectUrlRequired() {
        return this.templateItem.templateType == TemplateItemType.button;
    }


    constructor() {
        this.closePropertyDetailsEmitter = new EventEmitter<any>();
        this.deleteItemEmitter = new EventEmitter<any>();
        this.moveUpItemEmitter = new EventEmitter<any>();
        this.moveDownItemEmitter = new EventEmitter<any>();
    }

    public close() {
        this.closePropertyDetailsEmitter.emit();
    }

    public delete() {
        this.deleteItemEmitter.emit();
    }

    public moveUp() {
        this.moveUpItemEmitter.emit();
    }

    public moveDown() {
        this.moveDownItemEmitter.emit();
    }
}