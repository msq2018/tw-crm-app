import { Component } from '@angular/core';
import {NavController, NavParams ,ToastController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import {HomePage} from "../home/home";
import {MyApp} from "../../app/app.component";



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

  constructor(public navCtrl: NavController, public navParams: NavParams,public translate:TranslateService,private toastCtrl: ToastController) {

  }


  onClickLoginButton(){
    if (!this.validation()){
      return false;
    }
    this.navCtrl.push(HomePage);
  }



  private validation() {
    if (!this.username || !this.password){
      this.message("Password and username can't be empty");
      return false;
    }
    return true;
  }

  protected message(message:string,duration?:number = 3000,postion?:string = 'bottom'){
    let _this = this
    let toast = this.toastCtrl.create({
      message: _this.translate.get(message).value,
      duration: duration,
      position: postion
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}
