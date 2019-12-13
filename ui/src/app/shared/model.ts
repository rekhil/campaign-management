
export enum TemplateItemType {
    text = 1,
    button = 2,
    label = 3,
    splitter = 4
}

export class TemplateItem {
    templateType: TemplateItemType;
    value: string;
    fontSize: number;
    fontColor: string;
    isBold: boolean;
    isItalics: boolean;
    height: number;
    width: number;
    redirectUrl: string;
}

export class Template {
    name: string;
    templateItemList: TemplateItem[];
}



