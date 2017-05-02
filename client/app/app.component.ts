import { Component } from 'angular2/core';
import { HTTP_PROVIDERS, Http, Response } from "angular2/http";
import { TrainerService } from "./trainer.service";

@Component({
    selector:'app-comp',
    templateUrl:'app/app.html',
    providers:[TrainerService, HTTP_PROVIDERS]
})

export class AppComponent{
    title:string;
    message:string;
    trainerId:number=0;
    trainers=[];
    trainer={};

    constructor(public trainerService:TrainerService){
        this.title="Welcome to MEAN Stack";
        this.message="We are learning MEAN stack 2.0";
        trainerService.getTrainers().subscribe(
            (t)=>{
                this.trainers=JSON.parse(t._body);
            }
        );
    }

    getTrainerById(){
        this.trainerService.getTrainer(this.trainerId).subscribe(
            (t)=>{
                this.trainer=JSON.parse(t._body)
                console.log(t);
            }
        );
    }
}