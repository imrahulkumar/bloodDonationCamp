import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { BulbActivityComponent } from './home/bulb-activity/bulb-activity.component';
import { LogComponent } from './home/log/log.component';
import { DragComponent } from './home/drag/drag.component';

const routes: Routes = [
  { path: "", component: BulbActivityComponent },
  { path: "blood-recipient", component: LogComponent },
   { path: "drag", component: DragComponent },
];

// existActicity/${i}/${item}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
