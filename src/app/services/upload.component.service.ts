import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Global } from 'Global';

@Injectable({
    providedIn: 'root'
})
export class UploadService{
    
    private global: string = "";
    constructor(private http: HttpClient){
        this.global = Global.url;
    }

    saveFile(formData:FormData):Observable<any>{
        const url = this.global+"files";
        return this.http.post(url, formData);
    }
   
}