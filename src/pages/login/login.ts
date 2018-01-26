import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from "../home/home";
import { HttpClient } from "@angular/common/http";
import { HelperService } from "../../services/helper.service";
import {HttpHeaders} from "@angular/common/http";
import {FormControl} from "@angular/forms";



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  /**
   * user name
   */
  readonly username:string;
  /**
   * password
   */
  readonly password:string;

  private result = "abc";

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public translate:TranslateService,
      private helper:HelperService,
      private http:HttpClient
  ) {}


  onClickLoginButton(){
    if (!this.validation()){
      return false;
    }

    this.navCtrl.push(HomePage);
  }



  private validation() {
    if (!this.username || !this.password){
      this.helper.message(this.helper.trans("Password and username can't be empty"));
      return false;
    }
    /*let body = "username="+this.username+"&password="+this.password;
    let login = this.http.post('http://msq.blog2.website/api/users', body,{
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        }).subscribe(data=>{
          this.result = data;
    });*/
    return true;

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
