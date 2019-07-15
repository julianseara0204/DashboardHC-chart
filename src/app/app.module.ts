import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { IonicApp, IonicModule, IonicErrorHandler,NavController } from 'ionic-angular';
import {HttpModule} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import {Common} from '../providers/common';
import {AuthService} from "../providers/auth-service";
import {Network} from "@ionic-native/network";
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {ForgetPage} from "../pages/forget/forget";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Toast } from '@ionic-native/toast';
import { GetDataProvider } from '../providers/get-data/get-data';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
      ForgetPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp),
      IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
      ForgetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Toast,
      Network,
      AuthService,
      HTTP,
    GetDataProvider,HttpClient
  ]
})
export class AppModule {}
