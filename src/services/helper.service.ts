import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class HelperService{

    constructor(
        private toastCtrl: ToastController,
        private translate: TranslateService
    ){}

    /**
     * get toast message
     * @param message
     * @param duration
     * @param position
     */
    public message(message:string,duration:number = 3000,position:string = 'bottom'){
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    }

    /**
     * Get or set the translation then return
     * @param key
     * @returns {Observable<string|any>}
     */
    public trans(key:string){
        return this.translate.instant(key);
    }

    public translateService(){
        return this.translate;
    }



}