webpackJsonp([1],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(platform, common, authService, toastCtrl, navCtrl, events2, sanitizer) {
        var _this = this;
        this.common = common;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.events2 = events2;
        this.sanitizer = sanitizer;
        this.operation = [];
        this.date = [];
        this.dashboard = {
            "operation": "",
            "time": '10/01/2018',
            "type": "",
            "name": "",
            "data": "kVGDpwGw",
            "defaultDate": "yesturday",
            "defaultDateType": "daily",
        };
        this.yesterday = new Date();
        this.today = new Date();
        this.tomorrow = new Date();
        this.default_date = "";
        this.results1 = [];
        this.results = [];
        // const data = JSON.parse(localStorage.getItem("userData"));
        // this.localdata = data;
        platform.ready().then(function () {
            //operation
            _this.common.presentLoading();
            var a = "Operation";
            _this.authService.getData("v2/dimension/" + a).then(function (result) {
                _this.resposeData0 = result;
                if (_this.resposeData0) {
                    // console.log(this.resposeData0);
                    _this.dimension = _this.resposeData0;
                    // this.common.closeLoading();
                    var results = [];
                    _this.iterate_operation(_this.dimension, '');
                    _this.operation = _this.results;
                    //  console.log(this.operation);
                }
                else {
                    _this.presentToast("Pass a right Parameter");
                    // this.common.closeLoading();
                }
            }, function (err) {
                _this.presentToast(err);
                // this.common.closeLoading();
            });
            //dates
            // this.common.presentLoading();
            var d = "Date";
            _this.authService.getData("v2/dimension/" + d).then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData) {
                    // console.log(this.resposeData);
                    _this.dimension1 = _this.resposeData;
                    _this.common.closeLoading();
                    _this.iterate_date(_this.dimension1, '');
                    _this.date = _this.results1;
                    _this.set_default();
                    // console.log(this.dashboard.time);
                }
                else {
                    _this.presentToast("Pass a right Parameter");
                    _this.common.closeLoading();
                }
            }, function (err) {
                _this.presentToast(err);
                _this.common.closeLoading();
            });
        });
        // this.events2.subscribe('my-message', (data, id, name,defaultDate) => {
        this.events2.subscribe('my-message', function (data) {
            _this.dashboard.type = data.id;
            _this.dashboard.name = data.name;
            _this.dashboard.data = data.dashboardId;
            _this.dashboard.operation = data.defaultOperation;
            _this.dashboard.defaultDateType = data.defaultDateType;
            _this.dashboard.defaultDate = data.defaultDate;
            _this.set_default();
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
            if (_this.date != null && _this.date != "") {
                _this.getchartdata(data.dashboardId);
            }
        });
        this.events2.subscribe('page_refresh', function () {
            console.log(); // 👋 Hello from page1!
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], { message: 'refresh' });
            //this.navCtrl.remove(this.navCtrl.getPrevious().index);
        });
        // this.getchartdata('kVGDpwGw')
    }
    HomePage.prototype.load_menue1 = function () {
        this.events2.publish('load_menue');
    };
    //  convert(str) {
    //     var date = new Date(str),
    //         mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //         day = ("0" + date.getDate()).slice(-2);
    //     return [mnth,day ,date.getFullYear() ].join("/");
    // }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            // console.log(this.dashboard.data)
            _this.getchartdata(_this.dashboard.data);
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.set_default = function () {
        var _this = this;
        var latest_date;
        if (this.dashboard.defaultDateType == 'daily' && this.dashboard.defaultDate == 'yesterday') {
            latest_date = this.getYesterdayFormatted();
            this.flattenTime = this.date;
        }
        else if (this.dashboard.defaultDateType == 'monthly') {
            this.flattenTime = this.date.filter(function (x) {
                if (x.name.match(/^\d{2}\/\d{2}\/\d{4}$/g) == null) {
                    return x;
                }
            });
            if (this.dashboard.defaultDate == 'currentMonth') {
                latest_date = this.getCurrentMonthFormatted();
            }
            else if (this.dashboard.defaultDate == 'lastCloseMonth') {
                latest_date = this.getLastMonthFormatted();
            }
            else {
                latest_date = this.getLastCloseMonthFormatted();
            }
        }
        // sets member from time list to latest date!
        if (this.flattenTime) {
            this.flattenTime.forEach(function (item) {
                if (latest_date == item.name) {
                    _this.dashboard.time = item.id;
                    return;
                }
            });
        }
    };
    HomePage.prototype.getchartdata = function (page) {
        var _this = this;
        // this.common.presentLoading();
        var credentials = {
            "time": this.dashboard.time,
            "opsList": ["" + this.dashboard.operation + ""]
        };
        this.authService.postData(credentials, "v2/dashboards/" + page).then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData) {
                _this.single_dashboard = _this.resposeData;
                // this.common.closeLoading();
                console.log(_this.single_dashboard);
                _this.setChartData();
            }
            else {
                _this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();
        }, function (err) {
            _this.presentToast(err);
            // this.common.closeLoading();
        });
        // this.nav.setRoot(LoginPage);
    };
    HomePage.prototype.refresh = function (e) {
        var _this = this;
        console.log(e);
        this.authService.postData('', "v2/chart/" + e + "/image").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData) {
                console.log(_this.resposeData);
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
                if (e == "jE2BaWE8") {
                    _this.barCanvasimage = _this.resposeData.src;
                }
                else if (e == "ZyvpP50j") {
                    _this.lineCanvasimage = _this.resposeData.src;
                }
                else if (e == "jE82zkG6") {
                    _this.pieCanvasimage = _this.resposeData.src;
                }
                else if (e == "JypgLDEB") {
                    _this.blankValueimage = _this.resposeData.src;
                }
                else if (e == "dGxDneGn") {
                    _this.lineCanvas01image = _this.resposeData.src;
                }
                else if (e == "w0lDYQ07") {
                    _this.blank01Valueimage = _this.resposeData.src;
                }
                else if (e == "DyqvRKG3") {
                    _this.blank02Valueimage = _this.resposeData.src;
                }
                else if (e == "wGa2XW0v") {
                    _this.lineCanvas21image = _this.resposeData.src;
                }
                else if (e == "40AowVym") {
                    _this.lineCanvas2image = _this.resposeData.src;
                }
                else if (e == "Ry9zXVGm") {
                    _this.pieCanvas2image = _this.resposeData.src;
                }
                else if (e == "m0ZoaAEN") {
                    // this.pieCanvas2image = this.resposeData.src;
                    _this.blank2Valueimage = _this.resposeData.src;
                }
                else if (e == "p0M1Vk01") {
                    _this.lineCanvas22image = _this.resposeData.src;
                    // this.blank2Valueimage = this.resposeData.src;
                }
                else if (e == "20ddjj0M") {
                    // this.lineCanvas22image = this.resposeData.src;
                    _this.barCanvas2image = _this.resposeData.src;
                }
                else if (e == "2E5dRB0R") {
                    _this.blank3Valueimage = _this.resposeData.src;
                }
                else if (e == "Wy17J70P") {
                    _this.barCanvas3image = _this.resposeData.src;
                }
                else if (e == "OEKWM6Ex") {
                    _this.pieCanvas3image = _this.resposeData.src;
                }
                // console.log(this.barCanvasimage);
                // this.single_dashboard = this.resposeData;
                // this.common.closeLoading();
                //
                // this.setChartData();
            }
            else {
                _this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();
        }, function (err) {
            _this.presentToast(err);
            // this.common.closeLoading();
        });
    };
    HomePage.prototype.setChartData = function () {
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
        for (var _i = 0, _a = this.single_dashboard.charts; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(this.single_dashboard.charts)
            if (this.dashboard.type == '0') {
                if (data.chartId == "jE2BaWE8") {
                    this.cart_data = data;
                    this.getBarChart();
                }
                else if (data.chartId == "ZyvpP50j") {
                    this.cart_data = data;
                    this.getLineChart();
                }
                else if (data.chartId == "jE82zkG6") {
                    this.cart_data = data;
                    this.getPieChart();
                }
                else if (data.chartId == "JypgLDEB") {
                    this.cart_data = data;
                    this.blankChart();
                }
                else if (data.chartId == "dGxDneGn") {
                    this.cart_data = data;
                    // console.log(data)
                    this.getLineChart01();
                }
                else if (data.chartId == "w0lDYQ07") {
                    this.cart_data = data;
                    this.blankChart01();
                }
                else if (data.chartId == "DyqvRKG3") {
                    this.cart_data = data;
                    this.blankChart02();
                }
            }
            else if (this.dashboard.type == '1') {
                if (data.chartId == "wGa2XW0v") {
                    this.cart_data = data;
                    this.getLineChart21();
                }
                else if (data.chartId == "40AowVym") {
                    this.cart_data = data;
                    this.getLineChart2();
                }
                else if (data.chartId == "Ry9zXVGm") {
                    this.cart_data = data;
                    this.getPieChart2();
                }
                else if (data.chartId == "m0ZoaAEN") {
                    this.cart_data = data;
                    this.blankChart2();
                }
                else if (data.chartId == "p0M1Vk01") {
                    this.cart_data = data;
                    // console.log(data)
                    this.getLineChart22();
                }
                else if (data.chartId == "20ddjj0M") {
                    this.cart_data = data;
                    this.getBarChart2();
                }
            }
            else if (this.dashboard.type == '2') {
                if (data.chartId == "2E5dRB0R") {
                    this.cart_data = data;
                    this.blankChart3();
                }
                else if (data.chartId == "Wy17J70P") {
                    this.cart_data = data;
                    this.getBarChart3();
                }
                else if (data.chartId == "OEKWM6Ex") {
                    this.cart_data = data;
                    this.getPieChart3();
                }
            }
        }
    };
    HomePage.prototype.blankChart = function () {
        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data']);
        if (a['data'][0]['result'][0] != null) {
            this.blankValue = a['data'][0]['result'][0];
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.blankChart01 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] != null) {
            this.blank01Value = a['data'][0]['result'][0];
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.blankChart02 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] != null) {
            this.blank02Value = a['data'][0]['result'][0];
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.blankChart2 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data'][0]['result'][0]);
        if (a['data'][0]['result'][0] == null) {
            // this.blank2Value = "No Result";
            this.refresh(this.cart_data['chartId']);
        }
        else {
            this.blank2Value = a['data'][0]['result'][0];
        }
    };
    HomePage.prototype.blankChart3 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        if (a['data'][0]['result'][0] != null) {
            this.blank3Value = a['data'][0]['result'][0].toFixed(2) / 1000000 + "m";
        }
        else {
            // this.blank3Value = "No Result";
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            // this.barChart = this.getBarChart();
            // this.doughnutChart = this.getDoughnutChart();
            // this.halfDoughnutChart = this.getHalfDoughnutChart();
        }, 150);
        setTimeout(function () {
            // this.lineChart = this.getLineChart();
            // this.radarChart = this.getRadarChart();
            // this.polarAreaChart = this.getPolarAreaChart();
        }, 250);
        setTimeout(function () {
            // this.bubbleChart = this.getBubbleChart();
            // this.mixedChart = this.getMixedChart();
            // this.pieChart = this.getPieChart();
        }, 350);
    };
    HomePage.prototype.iterate_operation = function (obj, stack, i) {
        if (i === void 0) { i = 0; }
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    this.iterate_operation(obj[property], stack + '.' + property);
                }
                else {
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
    };
    HomePage.prototype.iterate_date = function (obj, stack, i) {
        if (i === void 0) { i = 0; }
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    this.iterate_date(obj[property], stack + '.' + property);
                }
                else {
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
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    };
    HomePage.prototype.updateData = function () {
        // After instantiating your chart, its data is accessible and
        // can be changed anytime with the function update().
        // It takes care of everything and even redraws the animations :D
        this.pieChart.data.datasets[0].data = [Math.random() * 1000, Math.random() * 1000, Math.random() * 1000];
        this.pieChart.update();
    };
    HomePage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](context, {
            data: data,
            options: options,
            type: chartType,
        });
    };
    HomePage.prototype.getPieChart = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        if (a['data'][0]['result'][0] != null) {
            var data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            };
            return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.getPieChart2 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data']);
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);
        }
        else {
            var data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            };
            return this.getChart(this.pieCanvas2.nativeElement, 'pie', data);
        }
    };
    HomePage.prototype.getPieChart3 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data']);
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);
        }
        else {
            var data = {
                labels: labels,
                datasets: [
                    {
                        data: a['data'][0]['result'],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            };
            return this.getChart(this.pieCanvas3.nativeElement, 'pie', data);
        }
    };
    HomePage.prototype.getPolarAreaChart = function () {
        var data = {
            datasets: [{
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                    label: 'My dataset' // for the legend
                }],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        var options = {
            elements: {
                arc: {
                    borderColor: '#000000'
                }
            }
        };
        return this.getChart(this.polarCanvas.nativeElement, 'polarArea', data, options);
    };
    HomePage.prototype.getBarChart = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            //   console.log(data);
            labels.push(data['name']);
        }
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);
        }
        else {
            var data = {
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
            var options = {
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
    };
    HomePage.prototype.getLineChart = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data'].length);
        if (a['data'].length != 0) {
            if (a['data'][0]['result'][0] != null) {
                var data = {
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
            }
            else {
                this.refresh(this.cart_data['chartId']);
            }
        }
    };
    HomePage.prototype.getLineChart01 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a);
        if (a['data'].length != 0) {
            var data = {
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
            return this.getChart(this.lineCanvas01.nativeElement, 'line', data);
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.getBarChart2 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data_1 = _a[_i];
            //   console.log(data);
            labels.push(data_1['name']);
        }
        var data = {
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
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas2.nativeElement, 'bar', data, options);
    };
    HomePage.prototype.getBarChart3 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        console.log(a['data'][0]['result']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            //   console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data']);
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);
        }
        else {
            var data = {
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
            var options = {
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
    };
    HomePage.prototype.getLineChart2 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        if (a['data'][0]['result'][0] != null) {
            var data = {
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
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.getLineChart21 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        if (a['data'][0]['result'][0] != null) {
            var data = {
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
                    }
                ]
            };
            return this.getChart(this.lineCanvas21.nativeElement, 'line', data);
        }
        else {
            this.refresh(this.cart_data['chartId']);
        }
    };
    HomePage.prototype.getLineChart22 = function () {
        var a = JSON.parse(this.cart_data['cache']);
        var labels = [];
        for (var _i = 0, _a = a['labels']; _i < _a.length; _i++) {
            var data = _a[_i];
            // console.log(data);
            labels.push(data['name']);
        }
        console.log(a['data']);
        if (a['data'][0]['result'][0] == null && a['data'][0]['result'][1] == null) {
            this.refresh(this.cart_data['chartId']);
        }
        else {
            var data = {
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
                    }
                ]
            };
            return this.getChart(this.lineCanvas22.nativeElement, 'line', data);
        }
    };
    HomePage.prototype.getLastCloseMonthFormatted = function () {
        var d = new Date();
        // set date to yesterday
        if (d.getDate() < 20) {
            d.setDate(d.getDate() - 60);
        }
        else {
            d.setDate(d.getDate() - 30);
        }
        // format into cube date formate MM/dd/yyyy
        //let latest_date = this.datepipe.transform(d, 'MM/dd/yyyy');
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        var latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;
    };
    HomePage.prototype.getLastMonthFormatted = function () {
        var d = new Date();
        d.setDate(d.getDate() - 31);
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        var latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;
    };
    HomePage.prototype.getCurrentMonthFormatted = function () {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        var latest_date = datePipe.transform(d, 'MMMM yyyy');
        return latest_date;
    };
    HomePage.prototype.getYesterdayFormatted = function () {
        var d = new Date();
        // set date to yesterday
        d.setDate(d.getDate() - 1);
        var datePipe = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */]("en-US");
        var latest_date = datePipe.transform(d, 'MM/dd/yyyy');
        return latest_date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas2'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas3'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas01'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas01", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas2'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas21'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas21", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas22'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas22", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas3'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('radarCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "radarCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('polarCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "polarCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas2'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas3'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "pieCanvas3", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'dateFormatPipe',
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\home\home.html"*/'<!-- -->\n<ion-header >\n    <ion-navbar color="">\n        <button ion-button menuToggle (click)="load_menue1()">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title style="padding-left: 20%">\n            {{this.dashboard.name}}\n        </ion-title>\n        <!--<ion-buttons end>-->\n        <!--<button ion-button tappable (click)="presentNotifications($event)">-->\n        <!--<ion-icon name="notifications"></ion-icon>-->\n        <!--</button>-->\n        <!--<button ion-button tappable (click)="goToAccount()">-->\n        <!--<ion-icon name="cog"></ion-icon>-->\n        <!--</button>-->\n        <!--</ion-buttons>-->\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg" style="background-color: #efefef">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-list>\n        <ion-item>\n            <ion-label>Operation</ion-label>\n            <ion-select  multiple="true" [(ngModel)]="this.dashboard.operation"    cancelText="Cancel" okText="Okay!">\n                <div *ngFor="let item of this.operation">\n                    <ion-option value="{{item.id}}" [selected]="Operation == item.id">{{item.value}}</ion-option>\n                </div>\n\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Time</ion-label>\n            <ion-select   multiple="false" [(ngModel)]="this.dashboard.time"   cancelText="Cancel" okText="Okay!" (ionChange)="getchartdata(this.dashboard.data)">\n                <div *ngFor="let item of this.date">\n                    <ion-option value="{{item.id}}" [selected]="this.defaultDate == this.dashboard.time">{{item.value}}</ion-option>\n                    <!--<ion-option value="{{item.id}}" [selected]="Date == item.id">{{item.value}}</ion-option>-->\n                </div>\n\n            </ion-select>\n        </ion-item>\n    </ion-list >\n    <div *ngIf="this.dashboard.type === 0">\n\n        <ion-card>\n            <ion-card-header>\n                Payer Mix\n                <button ion-button item-end outline icon-center right  (click)="refresh(\'jE2BaWE8\')" >\n\n                    <ion-icon name=\'refresh\'></ion-icon>\n                </button>\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="barCanvasimage"  width="300" *ngIf="barCanvasimage != null" style="    height: 287px;width: 287px" />\n\n                <canvas #barCanvas [hidden]="barCanvasimage"></canvas>\n            </ion-card-content>\n        </ion-card>\n\n        <!--<ion-card>-->\n        <!--<ion-card-header>-->\n        <!--Doughnut Chart-->\n        <!--</ion-card-header>-->\n        <!--<ion-card-content>-->\n        <!--<canvas #doughnutCanvas></canvas>-->\n        <!--</ion-card-content>-->\n        <!--</ion-card>-->\n\n        <ion-card>\n            <ion-card-header>\n                Occ Trend\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="lineCanvasimage"  width="300" *ngIf="lineCanvasimage != null" />\n                <canvas #lineCanvas [hidden]="lineCanvasimage"></canvas>\n            </ion-card-content>\n        </ion-card>\n\n        <!--<button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">-->\n        <!--<ion-icon name="search"></ion-icon> Search-->\n        <!--</button>-->\n        <ion-card>\n            <!--<button ion-button (click)="updateData()">Update</button>-->\n            <ion-card>\n                <ion-card-header>\n                    Census by Utilization\n                </ion-card-header>\n                <ion-card-content>\n                    <img class="user-avatar round" [src]="pieCanvasimage"  width="300" *ngIf="pieCanvasimage != null" />\n                    <canvas #pieCanvas [hidden]="pieCanvasimage"></canvas>\n                </ion-card-content>\n            </ion-card>\n        </ion-card>\n\n\n        <ion-card>\n            <ion-card-header>\n                Daily Census\n            </ion-card-header>\n            <ion-card-content style="height: 150px">\n                <img class="user-avatar round" [src]="blankValueimage"  width="300" *ngIf="blankValueimage != null" />\n                <h1 [hidden]="blankValueimage">{{blankValue}}</h1>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Direct Care Hours PPD\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="lineCanvas01image"  width="300" *ngIf="lineCanvas01image != null" />\n                <canvas #lineCanvas01 [hidden]="lineCanvas01image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                OT $\n            </ion-card-header>\n            <ion-card-content style="height: 150px">\n                <img class="user-avatar round" [src]="blank01Valueimage"  width="300" *ngIf="blank01Valueimage != null" />\n                <h1 [hidden]="blank01Valueimage">{{blank01Value}}</h1>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Skilled %\n            </ion-card-header>\n            <ion-card-content style="height: 150px">\n                <!--<canvas #blankCanvas02></canvas>-->\n                <img class="user-avatar round" [src]="blank02Valueimage"  width="300" *ngIf="blank02Valueimage != null" />\n                <h1 [hidden]="blank02Valueimage">{{blank02Value}}</h1>\n            </ion-card-content>\n        </ion-card>\n\n    </div>\n    <div *ngIf="dashboard.type === 1">\n        <ion-card >\n            <ion-card-header>\n                EBITDA 6 Mo Trend\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="lineCanvas21image"  width="300" *ngIf="lineCanvas21image != null" />\n                <canvas #lineCanvas21 [hidden]="lineCanvas21image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Revenue Trend Chart\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="lineCanvas2image"  width="300" *ngIf="lineCanvas2image != null" />\n                <canvas #lineCanvas2 [hidden]="lineCanvas2image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Daily Rates by Payer\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="barCanvas2image"  width="300" *ngIf="barCanvas2image != null" />\n                <canvas #barCanvas2 [hidden]="barCanvas2image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Admissions Source\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="pieCanvas2image"  width="300" *ngIf="pieCanvas2image != null" />\n                <canvas #pieCanvas2 [hidden]="pieCanvas2image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Bad Debt %\n            </ion-card-header>\n            <ion-card-content style="height: 150px">\n                <img class="user-avatar round" [src]="blank2Valueimage"  width="300" *ngIf="blank2Valueimage != null" />\n                <h1 [hidden]="blank2Valueimage">{{blank2Value}}</h1>\n            </ion-card-content>\n        </ion-card>\n        <ion-card >\n            <ion-card-header>\n                EBITDA Trend\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="lineCanvas22image"  width="300" *ngIf="lineCanvas22image != null" />\n                <canvas #lineCanvas22 [hidden]="lineCanvas22image"></canvas>\n            </ion-card-content>\n        </ion-card>\n\n\n    </div>\n    <div *ngIf="dashboard.type === 2">\n        <ion-card>\n            <ion-card-header>\n                Total Aging\n            </ion-card-header>\n            <ion-card-content style="height: 150px">\n                <img class="user-avatar round" [src]="blank3Valueimage"  width="300" style=" height: 220px;"  *ngIf="blank3Valueimage != null" />\n                <h1 [hidden]="blank3Valueimage">{{blank3Value}}</h1>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n                Aging by Bucket\n            </ion-card-header>\n            <ion-card-content>\n                <img class="user-avatar round" [src]="barCanvas3image"  width="300" *ngIf="barCanvas3image != null" />\n                <canvas #barCanvas3 [hidden]="barCanvas3image"></canvas>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <!--<button ion-button (click)="updateData()">Update Pie Chart Data</button>-->\n            <ion-card>\n                <ion-card-header>\n                    Skilled Cash\n                </ion-card-header>\n                <ion-card-content>\n                    <img class="user-avatar round" [src]="pieCanvas3image"  width="300" *ngIf="pieCanvas3image != null" />\n                    <canvas #pieCanvas3 [hidden]="pieCanvas3image"></canvas>\n                </ion-card-content>\n            </ion-card>\n        </ion-card>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPage = /** @class */ (function () {
    function ForgetPage(authService, common, navCtrl, navParams, toastCtrl) {
        this.authService = authService;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "" };
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.reset = function () {
        var _this = this;
        if (this.userData.username) {
            this.common.presentLoading();
            var credentials = {};
            this.authService.postData(credentials, "v2/auth/resetPassword/" + this.userData.username).then(function (result) {
                _this.resposeData = result;
                console.log(_this.resposeData);
                if (_this.resposeData.message == 'Success') {
                    console.log(_this.resposeData);
                    _this.presentToast("Password reset e-mail send!");
                    localStorage.setItem('userData', JSON.stringify(_this.resposeData));
                    _this.common.closeLoading();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
                else {
                    _this.presentToast("Please give valid username");
                    _this.common.closeLoading();
                }
            }, function (err) {
                var myObjStr = JSON.stringify(err);
                //Connection failed message
                _this.presentToast("Somthing went wrong,please try again later");
                _this.common.closeLoading();
            });
        }
        else {
            this.presentToast("Give username ");
        }
    };
    //   reset(){
    //       this.navCtrl.push(LoginPage);
    //   // if(this.userData.username){
    //   //   this.common.presentLoading();
    //   //   const credentials = new FormData();
    //   //   credentials.append('email', this.userData.username);
    //   //   credentials.append('lang',
    //   //     'en');
    //   //   console.log(credentials);
    //   //   this.authService.postData(credentials, "iworksafely/appapi/json/forgetpassword").then((result) =>{
    //   //     this.resposeData = result;
    //   //
    //   //     this.common.closeLoading();
    //   //     if(this.resposeData.status==true){
    //   //       console.log(this.resposeData);
    //   //       this.presentToast("Password Reset link send to Email");
    //   //       localStorage.setItem('userData', JSON.stringify(this.resposeData) )
    //   //       this.navCtrl.push(Login);
    //   //     }
    //   //     else{
    //   //       this.presentToast("Please give valid Email");
    //   //     }
    //   //
    //   //
    //   //
    //   //   }, (err) => {
    //   //     //Connection failed message
    //   //   });
    //   // }
    //   // else{
    //   //   this.presentToast("Give username and password");
    //   // }
    //
    // }
    ForgetPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\forget\forget.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n    <p text-center ion-text color="light">Reset Password</p>\n    <!-- Logo -->\n    <div padding-horizontal   text-center class="animated fadeInDown logo">\n      <div class="logo" ></div>\n\n      <div class="head_top_logo"><img src="assets/imgs/dashboard-logo.png" style=""></div>\n\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start  style="color: #FFFFFF"></ion-icon>\n          <!--<ion-icon name="repeat" item-start  style="color: #FFFFFF"></ion-icon>-->\n          <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">Email</span>\n        </ion-label>\n        <ion-input type="email" name="username" [(ngModel)]="userData.username"></ion-input>\n      </ion-item>\n\n\n    </form>\n\n\n    <div style="    padding: 0 1.2rem;">\n      <button ion-button icon-start block style="background-color: #4dd0E1;    margin-top: 60%;    height: 4.6rem;" tappable (click)="reset()">\n        Reset\n      </button>\n\n\n    </div>\n\n  </div>\n</ion-content>\n\n<style>\n  ion-content{\n    /*background-image: linear-gradient(to bottom right, #24c4e3, #0e808f);*/\n\n    background-image: url(assets/imgs/background.png);\n    background-position: center;\n    background-size: cover;\n\n  }\n  .item-md {\n    background-color: transparent;\n  }\n  .logo{\n    padding-top: 24px !important;\n    padding-bottom: 16px;\n  }\n  ion-item {\n    padding: 0 1.2rem;\n  }\n\n</style>'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forget/forget.module": [
		821,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_get_data_get_data__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, toast, common, authService, toastCtrl, GetDataProvider, events1, storage) {
        var _this = this;
        this.toast = toast;
        this.common = common;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.GetDataProvider = GetDataProvider;
        this.events1 = events1;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.authService.startupTokenRefresh();
            _this.storage.get("id_token").then(function (thetoken) {
                console.log(thetoken);
                _this.rootPage = thetoken
                    ? __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
                    : __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                if (thetoken != null) {
                    _this.load_dashboard();
                }
            });
        });
        this.storage.get("user").then(function (thedata) {
            console.log(thedata);
            if (thedata != null) {
                _this.name = thedata.name;
                var splitname = thedata.name.split(" ");
                _this.sortname = splitname[0].charAt(0) + splitname[1].charAt(0);
            }
        });
        this.events1.subscribe('load_menue', function () {
            console.log(_this.dashboards);
            if (_this.dashboards == null) {
                console.log(_this.dashboards);
                _this.load_dashboard();
            }
            _this.storage.get("user").then(function (thedata) {
                console.log(thedata);
                if (thedata != null) {
                    _this.name = thedata.name;
                    var splitname = thedata.name.split(" ");
                    _this.sortname = splitname[0].charAt(0) + splitname[1].charAt(0);
                }
            });
        });
    }
    MyApp.prototype.load_dashboard = function () {
        var _this = this;
        // this.common.presentLoading();
        this.authService.getData("v2/dashboards").then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData) {
                console.log(_this.resposeData);
                // this.common.closeLoading();
                var i = 0;
                for (var _i = 0, _a = _this.resposeData; _i < _a.length; _i++) {
                    var data = _a[_i];
                    data['id'] = i;
                    i++;
                }
                _this.dashboards = _this.resposeData;
                _this.events1.publish('my-message', _this.dashboards[0]);
            }
            else {
                _this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();
        }, function (err) {
            _this.presentToast(err);
            // this.common.closeLoading();
        });
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    };
    MyApp.prototype.openPage = function (page) {
        // this.common.presentLoading();
        // this.GetDataProvider.openPage(page);
        var dashboardData = [];
        for (var _i = 0, _a = this.dashboards; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.dashboardId == page) {
                dashboardData = data;
            }
        }
        this.events1.publish('my-message', dashboardData);
        // this.nav.setRoot(LoginPage);
    };
    MyApp.prototype.handleClick = function () {
    };
    MyApp.prototype.logout = function (e) {
        this.authService.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\app\app.html"*/'<!--Side Menu with avatar-->\n<ion-menu [content]="content" id="menu-avatar">\n    <ion-content>\n        <div #header>\n            <ion-row style="align-items:center;">\n                <ion-col col-3>\n\n                </ion-col>\n                <ion-col col-6>\n                    <!--<img class="user-avatar round" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png"-->\n                    <!--/>-->\n                    <div id="social">\n                        <a class="facebookBtn smGlobalBtn" href="#" >{{this.sortname}}</a>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n\n                </ion-col>\n            </ion-row>\n            <ion-row style="justify-content: center;">\n                <h3 style="">{{this.name}}</h3>\n            </ion-row>\n        </div>\n        <ion-list >\n            <div *ngFor="let item of this.dashboards">\n            <button ion-item (click)="openPage(item.dashboardId)" menuToggle>\n                {{item.name}}\n            </button>\n            </div>\n            <button ion-item (click)="logout(\'LoginPage\')" menuToggle>\n                Sign Out\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<style>\n    #social {\n        margin: 20px 10px;\n        text-align: center;\n    }\n\n    .smGlobalBtn { /* global button class */\n        display: inline-block;\n        position: relative;\n        cursor: pointer;\n        width: 70px;\n        height: 70px;\n        /*border:2px solid #ddd; !* add border to the buttons *!*/\n        /*box-shadow: 0 2px 2px #999;*/\n        padding: 0px;\n        text-decoration: none;\n        text-align: center;\n        color: #ffffff;\n        font-size: 25px;\n        font-weight: normal;\n        line-height: 2.5em;\n        border-radius: 50%;\n        -moz-border-radius:50%;\n        -webkit-border-radius:50%;\n    }\n\n    /* facebook button class*/\n    .facebookBtn{\n        background: #4dd0e1;;\n    }\n\n    .facebookBtn:before{ /* use :before to add the relevant icons */\n        font-family: "FontAwesome";\n        content: "\f09a"; /* add facebook icon */\n    }\n\n</style>'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_8__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_get_data_get_data__["a" /* GetDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';



/*
  Generated class for the GetDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetDataProvider = /** @class */ (function () {
    function GetDataProvider(common, authService) {
        this.common = common;
        this.authService = authService;
        console.log('Hello GetDataProvider Provider');
    }
    GetDataProvider.prototype.openPage = function (page) {
        var _this = this;
        // this.common.presentLoading();
        var credentials = {
            "time": "[Date].[Calendar].[Years].&[2019].&[Q2 2019].&[June 2019].&[06/22/2019]",
            "opsList": ["[Operation].[Region].[All]",
                "[Operation].[Region].[State].&[AZ]",
                "[Operation].[Region].[FacilityName].&[Building 6]"]
        };
        this.authService.postData(credentials, "v2/dashboards/" + page).then(function (result) {
            _this.resposeData = result;
            if (_this.resposeData) {
                // console.log(this.resposeData);
                _this.single_dashboard = _this.resposeData['dashboardName'];
                // this.common.closeLoading();
                console.log(_this.single_dashboard);
            }
            else {
                // this.presentToast("Pass a right Parameter");
                // this.common.closeLoading();
            }
            // this.common.closeLoading();
        }, function (err) {
            // this.presentToast(err);
            // this.common.closeLoading();
        });
        // this.nav.setRoot(LoginPage);
    };
    GetDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], GetDataProvider);
    return GetDataProvider;
}());

//# sourceMappingURL=get-data.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = /** @class */ (function () {
    function Common(loadingCtrl, sanitizer) {
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        console.log('Hello Common Provider');
    }
    Common.prototype.getProgressBar = function (percentaje) {
        var html = '<img src="assets/imgs/dashboard-logo.png" style="">' + '       <h3 >Loading...</h3>' +
            '<progress text-center  style="margin-left: 20%" value="' + percentaje + '" max="100"></progress>';
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Common.prototype.presentLoading = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({ spinner: 'hide',
            cssClass: 'custom-loading' });
        // this.loader = this.loadingCtrl.create({content: "Please wait ...",duration: 5000, cssClass: 'custom-loading'})
        this.loader.present();
        var counter = 0;
        var interval = setInterval(function () {
            _this.loader.data.content = _this.getProgressBar(counter);
            counter++;
            if (counter == 95) {
                // this.loader.dismiss();
                clearInterval(interval);
            }
        }, 40);
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var apiUrl = 'https://dhc-app-api-prod.azurewebsites.net/';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var AuthService = /** @class */ (function () {
    function AuthService(http, storage, app, events) {
        this.http = http;
        this.storage = storage;
        this.app = app;
        this.events = events;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.getProducts = function () {
        var _this = this;
        return this.storage.get('id_token').then(function (value) {
            _this.localdata = value;
            return _this.localdata;
        });
    };
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            _this.storage.get('id_token').then(function (value) {
                _this.localdata = value;
                //console.log(this.localdata)
                headers.append('Authorization', 'Bearer  ' + _this.localdata);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                //  console.log(credentials)
                _this.http.post(apiUrl + type, credentials, options).timeout(15000).subscribe(function (res) {
                    // this.idToken = res.json().token;
                    resolve(res.json());
                }, function (err) {
                    reject(err);
                    console.log(err);
                });
            });
        });
    };
    AuthService.prototype.loginpostData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            //   console.log(credentials)
            _this.http.post(apiUrl + type, credentials, options).timeout(15000).subscribe(function (res) {
                _this.idToken = res.json().token;
                // console.log(this.idToken)
                resolve(res.json());
            }, function (err) {
                reject(err);
                console.log(err);
            });
        });
    };
    AuthService.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            _this.storage.get('id_token').then(function (value) {
                _this.localdata = value;
                headers.append('Authorization', 'Bearer ' + _this.localdata);
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.get(apiUrl + type, options).timeout(15000).subscribe(function (res) {
                    resolve(res.json());
                }, function (err) {
                    reject(err);
                    console.log(err);
                });
            });
        });
    };
    AuthService.prototype.saveData = function (data) {
        var rs = data;
        // rs['exp'] = '12';
        // console.log(rs)
        // storage.set('name', 'Max');
        this.storage.set("user", rs);
        this.storage.set("id_token", rs.token);
    };
    AuthService.prototype.scheduleRefresh = function (e) {
        var _this = this;
        console.log('et a new JWT from Auth0');
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token
        var source = __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].of(this.idToken).flatMap(function (token) {
            // The delay to generate in this case is the difference
            // between the expiry time and the issued at time
            var jwtIat = e.iat;
            //   console.log(e.iat);
            var jwtExp = e.exp;
            var iat = new Date(0);
            var exp = new Date(0);
            var delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));
            console.log("will start refresh after :", (delay / 1000) / 60);
            if (delay - 1000 <= 0 || delay - 1000 == null)
                delay = 1;
            return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].interval(delay);
        });
        this.refreshSubscription = source.subscribe(function () {
            _this.getNewJwt();
        });
    };
    AuthService.prototype.getNewJwt = function () {
        var _this = this;
        // Get a new JWT from Auth0 using the refresh token saved
        // in local storage
        this.storage.get("id_token").then(function (thetoken) {
            var senddata = {
                Token: thetoken
            };
            _this.storage.remove('user');
            _this.storage.remove('id_token');
            _this.events.publish('page_refresh', '');
            // this.authService.postData(credentials, "v2/auth/signIn").then((result) =>{
            //         console.log(JSON.stringify(res));
            //         console.log(res.status);
            //         // If the API returned a successful response, mark the user as logged in
            //         // this need to be fixed on Laravel project to retun the New Token ;
            //         if(res.status == 'success') {
            //             this.storage.set("id_token", res.token);
            //
            //         } else {
            //             console.log("The Token Black Listed");
            //             this.logout();
            //
            //         }
            //     }, err => {
            //         console.error('ERROR', err);
            //     });
        });
    };
    AuthService.prototype.startupTokenRefresh = function () {
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token
        var _this = this;
        this.storage.get("id_token").then(function (thetoken) {
            if (thetoken) {
                var source = __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].of(thetoken).flatMap(function (token) {
                    // Get the expiry time to generate
                    // a delay in milliseconds
                    var a;
                    a = __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
                    var now = new Date().valueOf();
                    var jwtExp = a.exp;
                    var exp = new Date(0);
                    exp.setUTCSeconds(jwtExp);
                    var delay = exp.valueOf() - now;
                    if (delay <= 0) {
                        delay = 1;
                    }
                    // Use the delay in a timer to
                    // run the refresh at the proper time
                    return __WEBPACK_IMPORTED_MODULE_6_rxjs__["Observable"].timer(delay);
                });
                // Once the delay time from above is
                // reached, get a new JWT and schedule
                // additional refreshes
                source.subscribe(function () {
                    _this.getNewJwt();
                    _this.scheduleRefresh(thetoken);
                });
            }
            else {
                //there is no user logined
                console.info("there is no user logined ");
            }
        });
    };
    AuthService.prototype.logout = function () {
        // stop function of auto refesh
        // this.unscheduleRefresh();
        this.storage.remove('user');
        this.storage.remove('id_token');
    };
    AuthService.prototype.unscheduleRefresh = function () {
        // Unsubscribe fromt the refresh
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], AuthService.prototype, "nav", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(489);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forget_forget__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_get_data_get_data__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forget_forget__["a" /* ForgetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forget_forget__["a" /* ForgetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_20__providers_get_data_get_data__["a" /* GetDataProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(authService, toastCtrl, common, navCtrl, forgotCtrl, menu, navParams) {
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.common = common;
        this.navCtrl = navCtrl;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.userData = { "email": "", "password": "" };
        this.menu.swipeEnable(false);
    }
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log(this.navParams.get('message'));
        var message = this.navParams.get('message');
        if (message == "refresh") {
            console.log("Remove Page2");
            // this.navCtrl.remove(this.navCtrl.getPrevious().index);
            location.reload();
        }
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.userData.email && this.userData.password) {
            // this.common.presentLoading();
            var credentials = { email: this.userData.email, password: this.userData.password };
            this.authService.loginpostData(credentials, "v2/auth/signIn").then(function (result) {
                _this.resposeData = result;
                if (_this.resposeData.token != "Access Denied") {
                    var t = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(_this.resposeData.token);
                    t['token'] = _this.resposeData.token;
                    console.log(t);
                    _this.authService.saveData(t);
                    // this.authService.scheduleRefresh(t);
                    _this.presentToast("login success");
                    // localStorage.setItem('userData', JSON.stringify(this.resposeData) )
                    // this.common.closeLoading();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]);
                }
                else {
                    _this.presentToast("Please give valid username and password");
                    // this.common.closeLoading();
                }
            }, function (err) {
                var myObjStr = JSON.stringify(err);
                //Connection failed message
                _this.presentToast(err);
                // this.common.closeLoading();
            });
        }
        else {
            this.presentToast("Give username and password");
        }
    };
    LoginPage.prototype.forget = function () {
        //this.common.presentLoading();
        // this.common.closeLoading();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n<p text-center ion-text color="light">Sign In</p>\n    <!-- Logo -->\n    <div padding-horizontal   text-center class="animated fadeInDown logo">\n      <div class="logo" ></div>\n\n          <div class="head_top_logo"><img src="assets/imgs/dashboard-logo.png" style=""></div>\n\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" #myForm="ngForm" (ngSubmit)="login()">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start  style="color: #FFFFFF"></ion-icon>\n            <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">User Name</span>\n        </ion-label>\n        <ion-input  type="email" name="email" id="email" [ngModelOptions]="{standalone: true}" [(ngModel)]="userData.email"></ion-input>\n      </ion-item>\n\n      <ion-item style="">\n        <ion-label floating>\n          <ion-icon name="key" item-start  style="color: #FFFFFF"></ion-icon>\n            <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">Password</span>\n        </ion-label>\n        <ion-input type="password" name="password" [ngModelOptions]="{standalone: true}" [(ngModel)]="userData.password"></ion-input>\n      </ion-item>\n    </form>\n\n   \n    <div style="    padding: 0 1.2rem;">\n      <button ion-button icon-start block style="background-color: #4dd0E1;    margin-top: 26%;    height: 4.6rem;" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        Sign In\n      </button>\n\n   \n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n        <span ion-text style="color: rgba(234, 226, 226, 0.5);" tappable >Forget Password?  <span ion-text color="light" (click)="forget()">Reset</span></span>\n    </div>\n\n  </div>\n</ion-content>\n\n<style>\n    ion-content{\n        /*background-image: linear-gradient(to bottom right, #24c4e3, #0e808f);*/\n        /*background-image: url("assets/imgs/background.png");*/\n        background-image: url(assets/imgs/background.png);\n        background-position: center;\n        background-size: cover;\n    }\n.item-md {\n    background-color: transparent;\n}\n    .logo{\n        padding-top: 24px !important;\n        padding-bottom: 16px;\n    }\n    ion-item {\n        padding: 0 1.2rem;\n    }\n    .item-input-has-focus .label-md[stacked],\n    .input-has-focus .label-md[stacked],\n    .item-input-has-focus .label-md[floating],\n    .input-has-focus .label-md[floating]\n    {\n        /*color: #3df5d6 !important;*/\n        border-bottom:#FFFFFF ;\n    }\n    .ionlabel {\n        width: 1%;\n        white-space: nowrap;\n        padding-left: 16px;\n        color:#999;\n        font-size: 16px;\n        font-weight: 400;\n    }\n</style>'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 316,
	"./af.js": 316,
	"./ar": 317,
	"./ar-dz": 318,
	"./ar-dz.js": 318,
	"./ar-kw": 319,
	"./ar-kw.js": 319,
	"./ar-ly": 320,
	"./ar-ly.js": 320,
	"./ar-ma": 321,
	"./ar-ma.js": 321,
	"./ar-sa": 322,
	"./ar-sa.js": 322,
	"./ar-tn": 323,
	"./ar-tn.js": 323,
	"./ar.js": 317,
	"./az": 324,
	"./az.js": 324,
	"./be": 325,
	"./be.js": 325,
	"./bg": 326,
	"./bg.js": 326,
	"./bm": 327,
	"./bm.js": 327,
	"./bn": 328,
	"./bn.js": 328,
	"./bo": 329,
	"./bo.js": 329,
	"./br": 330,
	"./br.js": 330,
	"./bs": 331,
	"./bs.js": 331,
	"./ca": 332,
	"./ca.js": 332,
	"./cs": 333,
	"./cs.js": 333,
	"./cv": 334,
	"./cv.js": 334,
	"./cy": 335,
	"./cy.js": 335,
	"./da": 336,
	"./da.js": 336,
	"./de": 337,
	"./de-at": 338,
	"./de-at.js": 338,
	"./de-ch": 339,
	"./de-ch.js": 339,
	"./de.js": 337,
	"./dv": 340,
	"./dv.js": 340,
	"./el": 341,
	"./el.js": 341,
	"./en-SG": 342,
	"./en-SG.js": 342,
	"./en-au": 343,
	"./en-au.js": 343,
	"./en-ca": 344,
	"./en-ca.js": 344,
	"./en-gb": 345,
	"./en-gb.js": 345,
	"./en-ie": 346,
	"./en-ie.js": 346,
	"./en-il": 347,
	"./en-il.js": 347,
	"./en-nz": 348,
	"./en-nz.js": 348,
	"./eo": 349,
	"./eo.js": 349,
	"./es": 350,
	"./es-do": 351,
	"./es-do.js": 351,
	"./es-us": 352,
	"./es-us.js": 352,
	"./es.js": 350,
	"./et": 353,
	"./et.js": 353,
	"./eu": 354,
	"./eu.js": 354,
	"./fa": 355,
	"./fa.js": 355,
	"./fi": 356,
	"./fi.js": 356,
	"./fo": 357,
	"./fo.js": 357,
	"./fr": 358,
	"./fr-ca": 359,
	"./fr-ca.js": 359,
	"./fr-ch": 360,
	"./fr-ch.js": 360,
	"./fr.js": 358,
	"./fy": 361,
	"./fy.js": 361,
	"./ga": 362,
	"./ga.js": 362,
	"./gd": 363,
	"./gd.js": 363,
	"./gl": 364,
	"./gl.js": 364,
	"./gom-latn": 365,
	"./gom-latn.js": 365,
	"./gu": 366,
	"./gu.js": 366,
	"./he": 367,
	"./he.js": 367,
	"./hi": 368,
	"./hi.js": 368,
	"./hr": 369,
	"./hr.js": 369,
	"./hu": 370,
	"./hu.js": 370,
	"./hy-am": 371,
	"./hy-am.js": 371,
	"./id": 372,
	"./id.js": 372,
	"./is": 373,
	"./is.js": 373,
	"./it": 374,
	"./it-ch": 375,
	"./it-ch.js": 375,
	"./it.js": 374,
	"./ja": 376,
	"./ja.js": 376,
	"./jv": 377,
	"./jv.js": 377,
	"./ka": 378,
	"./ka.js": 378,
	"./kk": 379,
	"./kk.js": 379,
	"./km": 380,
	"./km.js": 380,
	"./kn": 381,
	"./kn.js": 381,
	"./ko": 382,
	"./ko.js": 382,
	"./ku": 383,
	"./ku.js": 383,
	"./ky": 384,
	"./ky.js": 384,
	"./lb": 385,
	"./lb.js": 385,
	"./lo": 386,
	"./lo.js": 386,
	"./lt": 387,
	"./lt.js": 387,
	"./lv": 388,
	"./lv.js": 388,
	"./me": 389,
	"./me.js": 389,
	"./mi": 390,
	"./mi.js": 390,
	"./mk": 391,
	"./mk.js": 391,
	"./ml": 392,
	"./ml.js": 392,
	"./mn": 393,
	"./mn.js": 393,
	"./mr": 394,
	"./mr.js": 394,
	"./ms": 395,
	"./ms-my": 396,
	"./ms-my.js": 396,
	"./ms.js": 395,
	"./mt": 397,
	"./mt.js": 397,
	"./my": 398,
	"./my.js": 398,
	"./nb": 399,
	"./nb.js": 399,
	"./ne": 400,
	"./ne.js": 400,
	"./nl": 401,
	"./nl-be": 402,
	"./nl-be.js": 402,
	"./nl.js": 401,
	"./nn": 403,
	"./nn.js": 403,
	"./pa-in": 404,
	"./pa-in.js": 404,
	"./pl": 405,
	"./pl.js": 405,
	"./pt": 406,
	"./pt-br": 407,
	"./pt-br.js": 407,
	"./pt.js": 406,
	"./ro": 408,
	"./ro.js": 408,
	"./ru": 409,
	"./ru.js": 409,
	"./sd": 410,
	"./sd.js": 410,
	"./se": 411,
	"./se.js": 411,
	"./si": 412,
	"./si.js": 412,
	"./sk": 413,
	"./sk.js": 413,
	"./sl": 414,
	"./sl.js": 414,
	"./sq": 415,
	"./sq.js": 415,
	"./sr": 416,
	"./sr-cyrl": 417,
	"./sr-cyrl.js": 417,
	"./sr.js": 416,
	"./ss": 418,
	"./ss.js": 418,
	"./sv": 419,
	"./sv.js": 419,
	"./sw": 420,
	"./sw.js": 420,
	"./ta": 421,
	"./ta.js": 421,
	"./te": 422,
	"./te.js": 422,
	"./tet": 423,
	"./tet.js": 423,
	"./tg": 424,
	"./tg.js": 424,
	"./th": 425,
	"./th.js": 425,
	"./tl-ph": 426,
	"./tl-ph.js": 426,
	"./tlh": 427,
	"./tlh.js": 427,
	"./tr": 428,
	"./tr.js": 428,
	"./tzl": 429,
	"./tzl.js": 429,
	"./tzm": 430,
	"./tzm-latn": 431,
	"./tzm-latn.js": 431,
	"./tzm.js": 430,
	"./ug-cn": 432,
	"./ug-cn.js": 432,
	"./uk": 433,
	"./uk.js": 433,
	"./ur": 434,
	"./ur.js": 434,
	"./uz": 435,
	"./uz-latn": 436,
	"./uz-latn.js": 436,
	"./uz.js": 435,
	"./vi": 437,
	"./vi.js": 437,
	"./x-pseudo": 438,
	"./x-pseudo.js": 438,
	"./yo": 439,
	"./yo.js": 439,
	"./zh-cn": 440,
	"./zh-cn.js": 440,
	"./zh-hk": 441,
	"./zh-hk.js": 441,
	"./zh-tw": 442,
	"./zh-tw.js": 442
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 799;

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\tabs\tabs.html"*/'<script src="../../../../New folder/ionic3-start-theme-master/src/app/app.component.ts"></script>\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[484]);
//# sourceMappingURL=main.js.map