import { Injectable } from '@angular/core';
import { Template, MailDetails } from './model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private baseUrl = ' https://webapplication120191214123426.azurewebsites.net/';

    constructor(private http: HttpClient) { }

    public getAllTemplates(): Observable<any> {
        return this.http.get(this.baseUrl + 'template');
    }

    public getTemplateDetailsById(templateId: string): Observable<any> {
        return this.http.get(this.baseUrl + 'template/get/' + templateId);
    }

    public createTemplateDetails(template: Template): Observable<any> {
        return this.http.post<Template>(this.baseUrl + 'template/post', template);
    }

    public sendEmail(mailDetails: MailDetails): Observable<any> {
        return this.http.post<Template>(this.baseUrl + 'send', mailDetails);
    }
}