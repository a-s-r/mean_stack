System.register(['angular2/core', "angular2/http", "./trainer.service"], function(exports_1, context_1) {
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
    var core_1, http_1, trainer_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (trainer_service_1_1) {
                trainer_service_1 = trainer_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(trainerService) {
                    var _this = this;
                    this.trainerService = trainerService;
                    this.trainerId = 0;
                    this.trainers = [];
                    this.trainer = {};
                    this.title = "Welcome to MEAN Stack";
                    this.message = "We are learning MEAN stack 2.0";
                    trainerService.getTrainers().subscribe(function (t) {
                        _this.trainers = JSON.parse(t._body);
                    });
                }
                AppComponent.prototype.getTrainerById = function () {
                    var _this = this;
                    this.trainerService.getTrainer(this.trainerId).subscribe(function (t) {
                        _this.trainer = JSON.parse(t._body);
                        console.log(t);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-comp',
                        templateUrl: 'app/app.html',
                        providers: [trainer_service_1.TrainerService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [trainer_service_1.TrainerService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map