import { Injectable } from "@angular/core";
import { WebBook } from '../http/Webbook';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Injectable()
export class BooksService {
    URL : string = "http://test.srikanthpragada.com/api/books";
    
    constructor(private http: HttpClient) {
    }

    getBooks() : Observable<WebBook[]>
    {
        return this.http.get<WebBook[]>(this.URL)
    }

    getBook(id : number) : Observable<WebBook>
    {
        return this.http.get<WebBook>(this.URL + "/" + id);
    }
    
}