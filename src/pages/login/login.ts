import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from "../home/home";
import { HelperService } from "../../services/helper.service";
import { HttpService } from "../../services/http.service";



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

  public result;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public translate:TranslateService,
      private helper:HelperService,
      private http:HttpService
  ) {}


 public onClickLoginButton(){
    this.initValidation();
  }



  private initValidation() {
    try{
      if (!this.username || !this.password){
        throw new Error(this.helper.trans("Password and username can't be empty."));
      }
      let request = this.http.post("api/users",{username:this.username,password:this.password});
      request.toPromise().then((response:any)=>{
          if (response.status == 0){
            throw new Error(this.helper.trans("Incorrect username or password."));
          }else if (response.status == 1){
            this.navCtrl.push(HomePage);
          }
      }).catch(e=>{
        this.helper.message(e.message);
      })
    }catch (e){
      this.helper.message(e.message);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
