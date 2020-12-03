import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http: HttpClient){}

    getAllComments():Observable<any>{
        const url = "https://jsonplaceholder.typicode.com/comments";
        return this.http.get(url);
    }

    getPostByUser():Observable<any>{
        const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
        return this.http.get(url);
    }

    getAllFiles():Observable<any>{
        const url = "http://localhost:3001/readAll";
        return this.http.get(url);
    }
}