import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FollowComponent } from "./follow/follow.component";
const routes: Routes = [
  {
    path: "",
    component: FollowComponent,
    data: { title: "stms.menu.follow" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FollowRoutingModule {}
