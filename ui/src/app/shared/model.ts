
export enum TemplateItemType {
    text = 1,
    button = 2,
    splitter = 3,
    image = 4
}

export class TemplateItem {
    templateItemId: string;
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
    templateId: string;
    name: string;
    description: string;
    category: string;
    templateItemList: TemplateItem[];
}



