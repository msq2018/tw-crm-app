import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";


@Injectable()
export class HttpService {
    /**
     * Base Url
     * @type {string}
     */
    public baseUrl;

    public loading:boolean = true;

    private postOptions ;

    constructor(
        private http:HttpClient
    ){
        this.baseUrl = "http://tw.onepp.top/";
        this.postOptions = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        }
    }


    /**
     * Processing post request
     * @param route
     * @param body
     * @param options
     * @returns {Observable<Object>}
     */
    public post(route:string,body:Object,options?:Object){
        let url = this.getRequestUrl(route);
        body = this.toStringBody(body);
        if (options){
            options = this.mergeJson(this.postOptions,options);
        }else{
            options = this.postOptions;
        }

        return this.http.post(url,body,options);
    }
    /**
     * Get request url according to base url
     * @param route
     * @returns {string}
     */
    public getRequestUrl(route:string){
        return this.baseUrl+route;
    }

    /**
     * Json to form string
     * @param body
     * @returns {string}
     */
    public toStringBody(body:Object){
        let bodyString = "",
            loopTimes = 0,
            bodySize = Object.keys(body).length;
        for (let key in body){
            let value = body[key],hyphen = (bodySize-1 != loopTimes)?"&":"";
            bodyString += key+'='+value + hyphen;
            loopTimes++;
        }
        return bodyString;
    }

    /**
     * merge
     * @param optionsArray
     * @returns {{}}
     */
    public mergeJson(...jsonArray:Object[]){
        let options = {};
        for(let option of jsonArray ){
            for (let key in option){
                options[key] = option[key]
            }
        }
        return options;
    }




}