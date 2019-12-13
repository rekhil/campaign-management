import { Injectable } from '@angular/core';
import { Template } from './model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private baseUrl = 'https://digitalsignageapi20191002101801.azurewebsites.net/api/';

    constructor(private http: HttpClient) { }

    public getAllTemplates(): Observable<any> {
        return this.http.get(this.baseUrl + 'templates');
    }

    public getTemplateDetailsById(templateId: number): Observable<any> {
        return this.http.get(this.baseUrl + 'templates/' + templateId);
    }

    public createTemplateDetails(template: Template): Observable<any> {
        return this.http.post<Template>(this.baseUrl + 'templates', template);
    }
}