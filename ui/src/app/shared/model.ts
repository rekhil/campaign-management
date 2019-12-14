
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
    filePath: string;
}

export class Template {
    templateId: string;
    name: string;
    description: string;
    category: string;
    templateItemList: TemplateItem[];
}

export class Subscriber {
    mailId: string;
    name: string;
    isSubscribed: boolean;
    dob: Date;
    gender: boolean;
}

export class MailDetails {
    saveTemplate: boolean;
    subscriberList: Subscriber[];
    template: Template;
}



