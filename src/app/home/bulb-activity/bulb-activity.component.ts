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
@Component({
  selector: "app-bulb-activity",
  templateUrl: "./bulb-activity.component.html",
  styleUrls: ["./bulb-activity.component.css"]
})
export class BulbActivityComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }




}
