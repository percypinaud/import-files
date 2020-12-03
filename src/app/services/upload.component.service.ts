import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadService{
    
    constructor(private http: HttpClient){}

    saveFile(formData:FormData):Observable<any>{
        const url = "http://localhost:3001/files";
        return this.http.post(url, formData);
    }
   
}