import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private translate: TranslateService) {
    this.initializeApp();
    this.initializeTranslate();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.show();
      this.splashScreen.hide();
    });
  }

  initializeTranslate(){
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    /*if (this.translate.getBrowserLang() !== undefined) {
     this.translate.use(this.translate.getBrowserLang());
     } else {
     this.translate.use('en'); // Set your language here
     }*/
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
