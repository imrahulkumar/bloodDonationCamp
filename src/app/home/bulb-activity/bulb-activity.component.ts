import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule,
  select
} from "@angular-redux/store";
import { IAppState } from "../../store";
import { DataServiceService } from "../msgService/data-service.service";
declare var $: any;
@Component({
  selector: "app-bulb-activity",
  templateUrl: "./bulb-activity.component.html",
  styleUrls: ["./bulb-activity.component.css"]
})
export class BulbActivityComponent implements OnInit {
  constructor() { }
bloodAplus:any=3;
bloodBplus:any=8;
bloodOplus:any= 2;
bloodABplus:any = 5;
bloodAminus:any = 9;
bloodBminus:any = 6;
bloodOminus:any =8;
bloodABminus:any=3;
  ngOnInit() {

  }

  bloodDonateForm()
  {
    $("#bloodDonorForm").modal('show');
  }


}
