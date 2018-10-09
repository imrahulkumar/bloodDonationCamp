import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./home/header/header.component";
import { BulbActivityComponent } from "./home/bulb-activity/bulb-activity.component";
import { LogComponent } from "./home/log/log.component";
import { AppRoutingModule } from ".//app-routing.module";
import { DataServiceService  } from "./home/msgService/data-service.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgRedux,
  DevToolsExtension,
  NgReduxModule
} from "@angular-redux/store";
import { DragulaModule } from 'ng2-dragula';
import { IAppState, rootReducer ,INITIAL_STATE} from "./store";
import { DragComponent } from './home/drag/drag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BulbActivityComponent,
    LogComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule.forRoot()
 
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
  counter = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 
}
