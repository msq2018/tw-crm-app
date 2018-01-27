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
    let request = this.http.post("api/users",{username:this.username,password:this.password});
    console.log(this.http.waitResult(request))
    /*let login = this.http.post('http://msq.blog2.website/api/users', body,{
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        }).toPromise().then(data=>{
          this.result = data;
    });*/
    //console.log(this.result);
    /*let _this = this;
    setTimeout(function () {
      console.log(_this.result)
    },5000)*/
    return false;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
