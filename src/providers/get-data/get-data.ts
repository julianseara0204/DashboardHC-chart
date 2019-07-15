// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Common} from "../common";
import {AuthService} from "../auth-service";

/*
  Generated class for the GetDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetDataProvider {
    resposeData:any;
    single_dashboard: any;
  constructor(public common: Common, public authService: AuthService) {
    console.log('Hello GetDataProvider Provider');
  }
    openPage(page) {
        // this.common.presentLoading();
        var credentials = {
            "time":"[Date].[Calendar].[Years].&[2019].&[Q2 2019].&[June 2019].&[06/22/2019]",
            "opsList":["[Operation].[Region].[All]",
                "[Operation].[Region].[State].&[AZ]",
                "[Operation].[Region].[FacilityName].&[Building 6]"]

        }
        this.authService.postData(credentials,"v2/dashboards/"+page).then((result) => {
            this.resposeData = result;

            if (this.resposeData) {
                // console.log(this.resposeData);
                this.single_dashboard = this.resposeData['dashboardName'];
                // this.common.closeLoading();

                console.log(this.single_dashboard);


            }
            else {
                // this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();

        }, (err) => {

            // this.presentToast(err);
            // this.common.closeLoading();

        });
        // this.nav.setRoot(LoginPage);
    }
}
