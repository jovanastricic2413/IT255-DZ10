System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/Rx', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, router_1;
    var AddRoomComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddRoomComponent = (function () {
                function AddRoomComponent(builder, http, router) {
                    this.http = http;
                    this.router = router;
<<<<<<< HEAD
                    this.signupForm = builder.group({
=======
                    this.registerForm = builder.group({
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
                        newRoomName: ["", common_1.Validators.none],
                        tv: ["", common_1.Validators.none],
                        beds: ["", common_1.Validators.none],
                        kvadratura: ["", common_1.Validators.none]
                    });
                }
                AddRoomComponent.prototype.onAddRoom = function () {
                    var _this = this;
<<<<<<< HEAD
                    var data = "newRoomName=" + this.signupForm.value.newRoomName + "&tv=" + this.signupForm.value.tv + "&beds=" + this.signupForm.value.beds + "&kvadratura=" + this.signupForm.value.kvadratura;
=======
                    var data = "newRoomName=" + this.registerForm.value.newRoomName + "&tv=" + this.registerForm.value.tv + "&beds=" + this.registerForm.value.beds + "&kvadratura=" + this.registerForm.value.kvadratura;
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/php/addroom.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspesno dodavanje sobe");
                            _this.router.parent.navigate(['./Home']);
                        }
                        else {
                            alert("Neuspesno dodavanje sobe");
                        }
                    });
                };
                AddRoomComponent = __decorate([
                    core_1.Component({
                        selector: 'AddRoom',
                        templateUrl: 'app/addroom/addroom.html',
                        styleUrls: ['css/style.css']
                    }), 
<<<<<<< HEAD
                    __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
                ], AddRoomComponent);
                return AddRoomComponent;
                var _a, _b, _c;
=======
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router])
                ], AddRoomComponent);
                return AddRoomComponent;
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
            }());
            exports_1("AddRoomComponent", AddRoomComponent);
        }
    }
});
//# sourceMappingURL=addroom.component.js.map