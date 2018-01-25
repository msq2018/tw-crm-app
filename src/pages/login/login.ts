import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from "../home/home";
import { FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HelperService } from "../../services/helper.service";



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
    let a ;
    if (!this.username || !this.password){
      this.helper.message(this.helper.trans("Password and username can't be empty"));
      return false;
    }

    this.http.get('http://msq.blog2.website/api/users/1').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(2);
      console.log(data);
    });
    return false;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
