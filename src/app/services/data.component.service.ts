import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Global } from 'Global';

@Injectable({
    providedIn: 'root'
})
export class DataService{

    private global: string = "";
    
    constructor(private http: HttpClient){
        this.global = Global.url;
    }
    
    getAllFiles():Observable<any>{
        const url = this.global+"readAll";
        return this.http.get(url);
    }
}