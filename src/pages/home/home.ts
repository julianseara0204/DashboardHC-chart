

import {Component, ViewChild, Pipe, PipeTransform} from '@angular/core';
import {NavController, ToastController, Events, Platform} from 'ionic-angular';
import { DatePipe } from '@angular/common';
import {Chart} from 'chart.js';
import {MyApp} from "../../app/app.component";
import {AuthService} from "../../providers/auth-service";
import {Common} from "../../providers/common";
import {LoginPage} from "../../pages/login/login";
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
    name: 'dateFormatPipe',
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('barCanvas') barCanvas;
    @ViewChild('barCanvas2') barCanvas2;
    @ViewChild('barCanvas3') barCanvas3;
    // @ViewChild('doughnutCanvas') doughnutCanvas;
    // @ViewChild('halfDoughnutCanvas') halfDoughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    @ViewChild('lineCanvas01') lineCanvas01;
    @ViewChild('lineCanvas2') lineCanvas2;
    @ViewChild('lineCanvas21') lineCanvas21;
    @ViewChild('lineCanvas22') lineCanvas22;
    @ViewChild('lineCanvas3') lineCanvas3;
    @ViewChild('radarCanvas') radarCanvas;
    @ViewChild('polarCanvas') polarCanvas;
    @ViewChild('pieCanvas') pieCanvas;
    @ViewChild('pieCanvas2') pieCanvas2;
    @ViewChild('pieCanvas3') pieCanvas3;
    // @ViewChild('bubbleCanvas') bubbleCanvas;
    // @ViewChild('mixedCanvas') mixedCanvas;
    // @ViewChild('blankCanvas') blankCanvas;
    // @ViewChild('blankCanvas01') blankCanvas01;
    // @ViewChild('blankCanvas02') blankCanvas02;

    barChart: any;
    doughnutChart: any;
    halfDoughnutChart: any;
    lineChart: any;
    radarChart: any;
    polarAreaChart: any;
    pieChart: any;
    bubbleChart: any;
    mixedChart: any;
    blankValue: any;
    blank01Value: any;
    blank02Value: any;
    blank2Value: any;
    blank3Value: any;
    public operation: any = [];
    public date: any = [];
    public localdata: any;
    resposeData0: any;
    resposeData: any;
    dimension: any;
    dimension1: any;
    single_dashboard: any;
    cart_data: any;
    dashboard = {
        "operation": "",
        "time": '10/01/2018',
        "type": "",
        "name": "",
        "data": "kVGDpwGw",
        "defaultDate": "yesturday",
        "defaultDateType": "daily",
    };
    yesterday: Date = new Date();
    today: Date = new Date();
    tomorrow: Date = new Date();
    default_date = "";
    results1 = []
    results = []
    flattenTime : any;
    barCanvasimage :any;
    lineCanvasimage :any;
    pieCanvasimage :any;
    blankValueimage :any;
    lineCanvas01image :any;
    blank01Valueimage :any;
    blank02Valueimage :any;

    lineCanvas21image :any;
    lineCanvas2image :any;
    barCanvas2image :any;
    pieCanvas2image :any;
    blank2Valueimage :any;
    lineCanvas22image :any;

    blank3Valueimage :any;
    barCanvas3image :any;
    pieCanvas3image :any;
    constructor(platform: Platform,
                public common: Common,
                public authService: AuthService,
                private toastCtrl: ToastController,
                public navCtrl: NavController,
                public events2: Events,
                private sanitizer: DomSanitizer) {
        // const data = JSON.parse(localStorage.getItem("userData"));
        // this.localdata = data;
        platform.ready().then(() => {
            //operation
            this.common.presentLoading();
            var a = "Operation";
            this.authService.getData("v2/dimension/" + a).then((result) => {
                this.resposeData0 = result;

                if (this.resposeData0) {
                    // console.log(this.resposeData0);
                    this.dimension = this.resposeData0;
                    // this.common.closeLoading();


                    var results = [];


                    this.iterate_operation(this.dimension, '')
                    this.operation = this.results;
                    //  console.log(this.operation);


                }
                else {
                    this.presentToast("Pass a right Parameter");
                    // this.common.closeLoading();
                }


            }, (err) => {

                this.presentToast(err);
                // this.common.closeLoading();
            });

            //dates

            // this.common.presentLoading();
            var d = "Date";
            this.authService.getData("v2/dimension/" + d).then((result) => {
                this.resposeData = result;

                if (this.resposeData) {
                    // console.log(this.resposeData);
                    this.dimension1 = this.resposeData;
                    this.common.closeLoading();


                    this.iterate_date(this.dimension1, '')
                    this.date = this.results1;
                    this.set_default()
                    // console.log(this.dashboard.time);


                }
                else {
                    this.presentToast("Pass a right Parameter");
                    this.common.closeLoading();
                }


            }, (err) => {

                this.presentToast(err);
                this.common.closeLoading();

            });
        });

        // this.events2.subscribe('my-message', (data, id, name,defaultDate) => {
        this.events2.subscribe('my-message', (data) => {
            this.dashboard.type = data.id;
            this.dashboard.name = data.name;
            this.dashboard.data = data.dashboardId;
            this.dashboard.operation = data.defaultOperation;
            this.dashboard.defaultDateType = data.defaultDateType
            this.dashboard.defaultDate = data.defaultDate;
            this.set_default()
            // this.tomorrow.setDate(this.tomorrow.getDate() + 1);
            // this.yesterday.setDate(this.yesterday.getDate() - 1);
            // this.default_date = this.convert(this.yesterday);

             // this.dashboard.time = this.convert(this.yesterday);
            // this.dashboard.defaultDate = data.defaultDate;




            // if (this.dashboard.operation) {
            //     this.orgIds = [this.dashboard.operation];
            // } else {
            //     this.orgIds = [this.flattenOrgs[0].id];
            // }

if (this.date != null && this.date != "") {
    this.getchartdata(data.dashboardId);
}

        });

        this.events2.subscribe('page_refresh', () => {
            console.log(); // 👋 Hello from page1!
             this.navCtrl.setRoot(LoginPage, {message: 'refresh'});
            //this.navCtrl.remove(this.navCtrl.getPrevious().index);
        });
        // this.getchartdata('kVGDpwGw')
    }
    load_menue1(){
        this.events2.publish('load_menue' );
    }

    //  convert(str) {
    //     var date = new Date(str),
    //         mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //         day = ("0" + date.getDate()).slice(-2);
    //     return [mnth,day ,date.getFullYear() ].join("/");
    // }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
           // console.log(this.dashboard.data)
            this.getchartdata(this.dashboard.data);
            refresher.complete();
        }, 2000);
    }
    set_default(){
    let latest_date;
    if (this.dashboard.defaultDateType == 'daily' && this.dashboard.defaultDate == 'yesterday') {
    latest_date = this.getYesterdayFormatted();
    this.flattenTime = this.date;
} else if (this.dashboard.defaultDateType == 'monthly') {

    this.flattenTime = this.date.filter(x => {

        if (x.name.match(/^\d{2}\/\d{2}\/\d{4}$/g) == null) {
            return x;
        }
    });
    if (this.dashboard.defaultDate == 'currentMonth') {
        latest_date = this.getCurrentMonthFormatted();
    } else if (this.dashboard.defaultDate == 'lastCloseMonth') {
        latest_date = this.getLastMonthFormatted();

    } else {
        latest_date = this.getLastCloseMonthFormatted();
    }

}

// sets member from time list to latest date!
if (this.flattenTime) {
    this.flattenTime.forEach(item => {
        if (latest_date == item.name) {
            this.dashboard.time = item.id;
            return;
        }
    });
}
}
    getchartdata(page) {
        // this.common.presentLoading();
        var credentials = {
            "time": this.dashboard.time,
            "opsList": [""+this.dashboard.operation+""]
        }
        this.authService.postData(credentials, "v2/dashboards/" + page).then((result) => {
            this.resposeData = result;

            if (this.resposeData) {

                this.single_dashboard = this.resposeData;
                // this.common.closeLoading();
console.log(this.single_dashboard)
                this.setChartData();


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
        // this.nav.setRoot(LoginPage);
    }
refresh(e){
    console.log(e);
    this.authService.postData('', "v2/chart/"+e+"/image").then((result) => {
        this.resposeData = result;

        if (this.resposeData) {

            console.log(this.resposeData);
            // fetch(this.resposeData)
            //     .then(res => res.blob())
            //     .then(blob =>  a=blob)

                // Array buffer to Base64:
                // var str = btoa(String.fromCharCode.apply(null, new Uint8Array(this.resposeData)));

                // console.log(str);
                // Or: '<img src="data:image/jpeg;base64,' + str + '">'

            // var url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
            // var url   =  this.resposeData._body;
            // var a;
            // fetch(url)
            //     .then(res => res.blob())
            //     .then(blob =>  a=blob)
            // let urlCreator = window.URL || this.resposeData;
            // let dataBlob = this.imageHandlerProvider.getBlob(data);
            // let imageUrl = urlCreator.createObjectURL(dataBlob);

         //    this.barCanvasimage = this.sanitizer.bypassSecurityTrustUrl(this.resposeData)
         //    var binaryData = [];
         //    binaryData.push(url);
         //    var imageUrl= window.URL.createObjectURL(new Blob(binaryData, {type: "image/png"}));
         //    this.barCanvasimage = this.sanitizer.bypassSecurityTrustUrl(str);
            if (e == "jE2BaWE8"){
                this.barCanvasimage = this.resposeData.src;
            } else if (e == "ZyvpP50j") {
                this.lineCanvasimage = this.resposeData.src;
            }else if (e == "jE82zkG6") {
                this.pieCanvasimage = this.resposeData.src;
            } else if (e == "JypgLDEB") {
                this.blankValueimage = this.resposeData.src;
            } else if (e == "dGxDneGn") {
                this.lineCanvas01image = this.resposeData.src;
            } else if (e == "w0lDYQ07") {
                this.blank01Valueimage = this.resposeData.src;
            } else if (e == "DyqvRKG3") {
                this.blank02Valueimage = this.resposeData.src;
            }
            else if (e == "wGa2XW0v") {
                this.lineCanvas21image = this.resposeData.src;
            } else if (e == "40AowVym") {
                this.lineCanvas2image = this.resposeData.src;
            } else if (e == "Ry9zXVGm") {
                this.pieCanvas2image = this.resposeData.src;
            } else if (e == "m0ZoaAEN") {
                // this.pieCanvas2image = this.resposeData.src;
                this.blank2Valueimage = this.resposeData.src;
            } else if (e == "p0M1Vk01") {
                this.lineCanvas22image = this.resposeData.src;
                // this.blank2Valueimage = this.resposeData.src;
            } else if (e == "20ddjj0M") {
                // this.lineCanvas22image = this.resposeData.src;
                this.barCanvas2image = this.resposeData.src;
            }
            else if (e == "2E5dRB0R") {
                this.blank3Valueimage = this.resposeData.src;
            } else if (e == "Wy17J70P") {
                this.barCanvas3image = this.resposeData.src;
            } else if (e == "OEKWM6Ex") {
                this.pieCanvas3image = this.resposeData.src;
            }

            // console.log(this.barCanvasimage);

            // this.single_dashboard = this.resposeData;
            // this.common.closeLoading();
            //
            // this.setChartData();


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
    setChartData() {
        console.log(this.single_dashboard.charts);
        this.barCanvasimage = null;
        this.lineCanvasimage = null;
        this.pieCanvasimage = null;
        this.blankValueimage = null;
        this.lineCanvas01image = null;
        this.blank01Valueimage = null;
        this.blank02Valueimage = null;

        this.lineCanvas21image = null;
        this.lineCanvas2image = null;
        this.barCanvas2image = null;
        this.pieCanvas2image = null;
        this.blank2Valueimage = null;
        this.lineCanvas22image = null;

        this.blank3Valueimage = null;
        this.barCanvas3image = null;
        this.pieCanvas3image = null;

        for (let data of this.single_dashboard.charts) {
            // console.log(this.single_dashboard.charts)

            if (this.dashboard.type == '0') {
                if (data.chartId == "jE2BaWE8") {
                    this.cart_data = data;
                    this.getBarChart()
                } else if (data.chartId == "ZyvpP50j") {
                    this.cart_data = data
                    this.getLineChart();
                } else if (data.chartId == "jE82zkG6") {
                    this.cart_data = data
                    this.getPieChart();
                } else if (data.chartId == "JypgLDEB") {
                    this.cart_data = data
                    this.blankChart();
                } else if (data.chartId == "dGxDneGn") {
                    this.cart_data = data
                    // console.log(data)
                    this.getLineChart01();
                } else if (data.chartId == "w0lDYQ07") {
                    this.cart_data = data
                    this.blankChart01();
                } else if (data.chartId == "DyqvRKG3") {
                    this.cart_data = data
                    this.blankChart02();
                }
            }
            else if (this.dashboard.type == '1') {

                if (data.chartId == "wGa2XW0v") {
                    this.cart_data = data
                    this.getLineChart21();
                } else if (data.chartId == "40AowVym") {
                    this.cart_data = data
                    this.getLineChart2();
                } else if (data.chartId == "Ry9zXVGm") {
                    this.cart_data = data
                    this.getPieChart2();
                } else if (data.chartId == "m0ZoaAEN") {
                    this.cart_data = data
                    this.blankChart2();
                } else if (data.chartId == "p0M1Vk01") {
                    this.cart_data = data
                    // console.log(data)
                    this.getLineChart22();
                } else if (data.chartId == "20ddjj0M") {
                    this.cart_data = data
                    this.getBarChart2()
                }
            } else if (this.dashboard.type == '2') {

                if (data.chartId == "2E5dRB0R") {

                    this.cart_data = data
                    this.blankChart3()
                } else if (data.chartId == "Wy17J70P") {

                    this.cart_data = data
                    this.getBarChart3();
                } else if (data.chartId == "OEKWM6Ex") {

                    this.cart_data = data
                    this.getPieChart3();
                }
            }
        }

    }

    blankChart() {
        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data'])
        if (a['data'][0]['result'][0] !=null){
            this.blankValue = a['data'][0]['result'][0];
        } else {
            this.refresh(this.cart_data['chartId']);
        }

    }

    blankChart01() {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] !=null){
        this.blank01Value = a['data'][0]['result'][0];
        } else {
            this.refresh(this.cart_data['chartId']);
        }
    }

    blankChart02() {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] !=null){
        this.blank02Value = a['data'][0]['result'][0];
        } else {
            this.refresh(this.cart_data['chartId']);
        }

    }

    blankChart2() {
        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data'][0]['result'][0])
        if (a['data'][0]['result'][0]== null){
            // this.blank2Value = "No Result";
            this.refresh(this.cart_data['chartId']);
        }
        else {
            this.blank2Value = a['data'][0]['result'][0];
        }

    }

    blankChart3() {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] != null){
            this.blank3Value = a['data'][0]['result'][0].toFixed(2)/1000000+"m";
        } else{
            // this.blank3Value = "No Result";
            this.refresh(this.cart_data['chartId']);
        }


    }

    ngAfterViewInit() {
        setTimeout(() => {
            // this.barChart = this.getBarChart();
            // this.doughnutChart = this.getDoughnutChart();
            // this.halfDoughnutChart = this.getHalfDoughnutChart();
        }, 150);
        setTimeout(() => {
            // this.lineChart = this.getLineChart();
            // this.radarChart = this.getRadarChart();
            // this.polarAreaChart = this.getPolarAreaChart();
        }, 250);
        setTimeout(() => {
            // this.bubbleChart = this.getBubbleChart();
            // this.mixedChart = this.getMixedChart();
            // this.pieChart = this.getPieChart();
        }, 350);

    }

    iterate_operation(obj, stack, i = 0) {

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    this.iterate_operation(obj[property], stack + '.' + property,);
                } else {
                    if (property == "name") {
                        // console.log( obj[property]);
                        var a = {
                            "id": obj['id'],
                            "value": obj[property]

                        };
                        this.results.push(a);
                        if (obj.length == i) {
                            return this.results;
                        }

                    }


                }
            }
        }
    }

    iterate_date(obj, stack, i = 0) {

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    this.iterate_date(obj[property], stack + '.' + property);
                } else {
                    if (property == "name") {

// if (this.default_date== obj['name']){
//     console.log(obj[property])
//     this.dashboard.time = obj[property];
// }
                        var b = {
                            "id": obj['id'],
                            "value": obj[property],
                            "name": obj['name'],

                        };
                        this.results1.push(b);
                        if (obj.length == i) {
                            return this.results1;
                        }
                    }


                }
            }
        }
    }


    presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    }

    updateData() {
        // After instantiating your chart, its data is accessible and
        // can be changed anytime with the function update().
        // It takes care of everything and even redraws the animations :D
        this.pieChart.data.datasets[0].data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000];
        this.pieChart.update();
    }

    getChart(context, chartType, data, options?) {
        return new Chart(context, {
            data,
            options,
            type: chartType,
        });
    }


    getPieChart() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
        if (a['data'][0]['result'][0]!= null) {
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }]
            };

            return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
        }else{
            this.refresh(this.cart_data['chartId']);
        }
    }

    getPieChart2() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data'])
        if (a['data'][0]['result'][0]== null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);

        }else{
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }]
            };

            return this.getChart(this.pieCanvas2.nativeElement, 'pie', data);
        }
    }

    getPieChart3() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data'])
        if (a['data'][0]['result'][0]== null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);

        }else {
            const data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }]
            };

            return this.getChart(this.pieCanvas3.nativeElement, 'pie', data);
        }
    }

    getPolarAreaChart() {
        const data = {
            datasets: [{
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                label: 'My dataset' // for the legend
            }],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };

        const options = {
            elements: {
                arc: {
                    borderColor: '#000000'
                }
            }
        };

        return this.getChart(this.polarCanvas.nativeElement, 'polarArea', data, options);
    }


    getBarChart() {

        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            //   console.log(data);
            labels.push(data['name']);
        }

        if ( a['data'][0]['result'][0]==null &&  a['data'][0]['result'][1]==null){
this.refresh(this.cart_data['chartId']);
        } else{
            const data = {
                labels: labels,
                datasets: [{
                    label: '#' + this.cart_data['chartName'],

                    data: a['data'][0]['result'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            };
            return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
        }



    }

    getLineChart() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
console.log(a['data'].length)
        if(a['data'].length!=0) {
            if (a['data'][0]['result'][0] != null) {
                const data = {
                    labels: labels,
                    datasets: [
                        {
                            label: this.cart_data['chartName'],
                            fill: true,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 3,
                            pointHitRadius: 10,
                            data: a['data'][0]['result'],
                            spanGaps: false,
                        }

                    ]
                };

                return this.getChart(this.lineCanvas.nativeElement, 'line', data);
            } else {
                this.refresh(this.cart_data['chartId']);
            }
        }
    }
    getLineChart01() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a)
        if (a['data'].length != 0) {
        const data = {
            labels: labels,
            datasets: [
                {
                    label: this.cart_data['chartName'],
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 3,
                    pointHitRadius: 10,
                    data: a['data'][0]['result'],
                    spanGaps: false,
                }

            ]
        }

        return this.getChart(this.lineCanvas01.nativeElement, 'line', data);
        }else{
            this.refresh(this.cart_data['chartId']);
        }
    }

    getBarChart2() {

        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            //   console.log(data);
            labels.push(data['name']);
        }

        const data = {
            labels: labels,
            datasets: [{
                label: '#' + this.cart_data['chartName'],

                data: a['data'][0]['result'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);
    }

    getBarChart3() {

        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data'][0]['result']);

        var labels = [];
        for (let data of a['labels']) {
            //   console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data']);
        if ( a['data'][0]['result'][0]==null &&  a['data'][0]['result'][1]==null){
            this.refresh(this.cart_data['chartId']);
        }else {
            const data = {
                labels: labels,
                datasets: [{
                    label: '#' + this.cart_data['chartName'],

                    data: a['data'][0]['result'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            const options = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            };

            return this.getChart(this.barCanvas3.nativeElement, 'bar', data, options);
        }
    }

    getLineChart2() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }

        if (a['data'][0]['result'][0] != null) {
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: this.cart_data['chartName'],
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 3,
                        pointHitRadius: 10,
                        data: a['data'][0]['result'],
                        spanGaps: false,
                    }

                ]
            };

            return this.getChart(this.lineCanvas2.nativeElement, 'line', data);
        }
        else{
            this.refresh(this.cart_data['chartId']);
        }
    }

    getLineChart21() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }

        if (a['data'][0]['result'][0] != null) {
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: this.cart_data['chartName'],
                        fill: false,
                        // lineTension: 0.1,
                        // backgroundColor: 'rgba(75,192,192,0.4)',
                        // borderColor: 'rgba(75,192,192,1)',
                        // borderCapStyle: 'butt',
                        // borderDash: [],
                        // borderDashOffset: 0.0,
                        // borderJoinStyle: 'miter',
                        // pointBorderColor: 'rgba(75,192,192,1)',
                        // pointBackgroundColor: '#fff',
                        // pointBorderWidth: 1,
                        // pointHoverRadius: 5,
                        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        // pointHoverBorderColor: 'rgba(220,220,220,1)',
                        // pointHoverBorderWidth: 2,
                        // pointRadius: 3,
                        // pointHitRadius: 10,
                        data: a['data'][0]['result'],
                        // spanGaps: false,
                    }

                ]
            };

            return this.getChart(this.lineCanvas21.nativeElement, 'line', data);
        } else{
    this.refresh(this.cart_data['chartId']);
}
    }

    getLineChart22() {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (let data of a['labels']) {
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data'])
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);

        } else{
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: this.cart_data['chartName'],
                        fill: false,
                        // lineTension: 0.1,
                        // backgroundColor: 'rgba(75,192,192,0.4)',
                        // borderColor: 'rgba(75,192,192,1)',
                        // borderCapStyle: 'butt',
                        // borderDash: [],
                        // borderDashOffset: 0.0,
                        // borderJoinStyle: 'miter',
                        // pointBorderColor: 'rgba(75,192,192,1)',
                        // pointBackgroundColor: '#fff',
                        // pointBorderWidth: 1,
                        // pointHoverRadius: 5,
                        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        // pointHoverBorderColor: 'rgba(220,220,220,1)',
                        // pointHoverBorderWidth: 2,
                        // pointRadius: 3,
                        // pointHitRadius: 10,
                        data: a['data'][0]['result'],
                        // spanGaps: false,
                    }

                ]
            };

            return this.getChart(this.lineCanvas22.nativeElement, 'line', data);
        }
    }

    getLastCloseMonthFormatted(): string {

        const d = new Date();

        // set date to yesterday
        if (d.getDate() < 20) {
            d.setDate(d.getDate() - 60);
        } else {
            d.setDate(d.getDate() - 30);
        }

        // format into cube date formate MM/dd/yyyy
        //let latest_date = this.datepipe.transform(d, 'MM/dd/yyyy');
        var datePipe = new DatePipe("en-US");
        const latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;

    }

    getLastMonthFormatted(): string {

        const d = new Date();

        d.setDate(d.getDate() - 31);
        var datePipe = new DatePipe("en-US");
        const latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;

    }

    getCurrentMonthFormatted(): string {


        const d = new Date();

        d.setDate(d.getDate() - 1);
        var datePipe = new DatePipe("en-US");
        const latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;

    }

    getYesterdayFormatted(): string {


        const d = new Date();

        // set date to yesterday
        d.setDate(d.getDate() - 1);
        var datePipe = new DatePipe("en-US");
        const latest_date = datePipe.transform(d, 'MM/dd/yyyy');
        return latest_date;

    }
}



