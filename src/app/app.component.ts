import {ViewChild, Component} from '@angular/core';
import {Nav, Platform, ToastController, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';

import {Toast} from '@ionic-native/toast';
import {LoginPage} from "../pages/login/login";
import {HomePage} from "../pages/home/home";
import {Common} from "../providers/common";
import {AuthService} from "../providers/auth-service";
import {GetDataProvider} from "../providers/get-data/get-data";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = LoginPage;
    resposeData: any;
    dashboards: any;
    name: any
    sortname :any
    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private toast: Toast,
                public common: Common,
                public authService: AuthService,
                private toastCtrl: ToastController,
                public GetDataProvider: GetDataProvider,
                public events1: Events,
                private storage: Storage,) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            this.authService.startupTokenRefresh();
            this.storage.get("id_token").then((thetoken) => {
                console.log(thetoken)
                this.rootPage = thetoken
                    ? HomePage
                    : LoginPage
                if (thetoken != null) {
                    this.load_dashboard();
                }
            });

        });

        this.storage.get("user").then((thedata) => {
            console.log(thedata)

            if (thedata != null) {
                this.name = thedata.name;
                var splitname = thedata.name.split(" ");
                this.sortname = splitname[0].charAt(0)+splitname[1].charAt(0);
            }
        });
        this.events1.subscribe('load_menue', () => {
            console.log(this.dashboards);
            if (this.dashboards == null) {
                console.log(this.dashboards);
                this.load_dashboard();
            }
            this.storage.get("user").then((thedata) => {
                console.log(thedata)

                if (thedata != null) {
                    this.name = thedata.name;
                    var splitname = thedata.name.split(" ");
                    this.sortname = splitname[0].charAt(0)+splitname[1].charAt(0);
                }
            });
        })
    }

    load_dashboard() {
        // this.common.presentLoading();
        this.authService.getData("v2/dashboards").then((result) => {
            this.resposeData = result;

            if (this.resposeData) {
               console.log(this.resposeData);

                // this.common.closeLoading();
                var i = 0;
                for (let data of this.resposeData) {
                    data['id'] = i;
                    i++;
                }
                this.dashboards = this.resposeData;
                this.events1.publish('my-message', this.dashboards[0]);

            }
            else {
                this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();

        }, (err) => {

            this.presentToast(err);
            // this.common.closeLoading();

        });
    }

    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    }

    openPage(page) {
        // this.common.presentLoading();
        // this.GetDataProvider.openPage(page);
        var dashboardData = [];
        for (let data of this.dashboards) {
            if (data.dashboardId == page) {
                dashboardData = data;
            }
        }
        this.events1.publish('my-message', dashboardData);
        // this.nav.setRoot(LoginPage);
    }

    handleClick() {


    }

    logout(e) {
        this.authService.logout();
        this.nav.setRoot(LoginPage);
    }
}
