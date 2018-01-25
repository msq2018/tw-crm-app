import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class HttpService {
    static requestUrl = "http://tw.onepp.top/?v=1";
    constructor(
        private http:HttpClient
    ){}


}