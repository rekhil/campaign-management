import { Component, OnInit, OnDestroy } from '@angular/core';
import { TemplateItem, Template, TemplateItemType, MailDetails, Subscriber } from '../shared/model';
import { DataService } from '../shared/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-create-template',
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit, OnDestroy {
    public template: Template;
    public selectedItem = new TemplateItem();
    public showProperty: boolean;
    private sub: any;
    public isPreview = false;
    public mode = 1;

    public get saveButtonText(): string {
        return this.template.templateId ? "Update Mail Template" : "Save Mail Template";
    }

    public get saveSendButtonText(): string {
        return this.template.templateId ? "Update Template And Send Mail" : "Save Template And Send Mail";
    }

    constructor(public dataService: DataService,
        private route: ActivatedRoute,
        private router: Router) {
        this.createNewObject();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            const templateId = params['id'];
            this.template.templateId = templateId ? templateId : null;
            if (this.template.templateId) {
                this.GetTemplateDetailsById(this.template.templateId);
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public createNewObject() {
        this.template = new Template();
        this.template.templateId = null;
        this.template.templateItemList = [];
        this.showProperty = false;
    }

    public addTemplateItem(templateType: number) {
        const templateItem = new TemplateItem();
        templateItem.templateType = templateType;
        if (templateType == TemplateItemType.text) {
            templateItem.width = 100;
            templateItem.height = 20;
            templateItem.value = "This is a text block. You can use it to add text to your template";
            templateItem.fontColor = "black";
            templateItem.fontSize = 10;
            templateItem.isBold = false;
            templateItem.isItalics = false;
        } else if (templateType == TemplateItemType.button) {
            templateItem.width = 100;
            templateItem.height = 20;
            templateItem.value = "Button Text";
            templateItem.fontColor = "black";
            templateItem.fontSize = 10;
            templateItem.isBold = false;
            templateItem.isItalics = false;
            templateItem.redirectUrl = '';
        } else if (templateType == TemplateItemType.image) {
            templateItem.width = 100;
            templateItem.height = 50;
            templateItem.redirectUrl = '';
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
                this.GetTemplateDetailsById(sucessResponse);
            },
            (errorResponse) => {

            }
        );
    }

    public GetTemplateDetailsById(templateId: string) {
        this.dataService.getTemplateDetailsById(templateId).subscribe(
            (sucessResponse) => {
                this.template = sucessResponse;
            },
            (errorResponse) => {
                this.router.navigate(['/template']);
            }
        );
    }

    public sendMail(saveTemplate: boolean) {
        const mailDetails = new MailDetails();
        mailDetails.template = this.template;
        mailDetails.subscriberList = [];

        const subscriber1 = new Subscriber();
        subscriber1.mailId = "rekhildevadasan@gmail.com";
        mailDetails.subscriberList.push(subscriber1);

        const subscriber2 = new Subscriber();
        subscriber2.mailId = "didhinsuresh272@gmail.com";
        mailDetails.subscriberList.push(subscriber2);

        mailDetails.saveTemplate = saveTemplate;

        this.dataService.sendEmail(mailDetails).subscribe(
            (sucessResponse) => {
                this.createNewObject();
            },
            (errorResponse) => {
                this.createNewObject();
            }
        );
    }

    public chooseTemplate() {
        this.router.navigate(['/templatelist']);
    }

    public preview() {
        this.isPreview = true;
    }

    public backToEdit() {
        this.isPreview = false;
    }

    public onModeChange(value: any) {
        this.mode = value;
    }

    public onCategoryChange(value: any) {
        this.template.category = value;
    }
}