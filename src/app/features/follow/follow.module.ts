import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {FollowRoutingModule} from "./follow-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {FollowComponent} from "./follow/follow.component";

@NgModule({
    declarations: [FollowComponent],
    imports: [CommonModule, SharedModule, FollowRoutingModule, MatPaginatorModule, MatTableModule, MatSortModule]
})
export class FollowModule {
}
