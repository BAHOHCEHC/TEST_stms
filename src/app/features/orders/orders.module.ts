import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../../shared/shared.module";

import {OrdersRoutingModule} from "./orders-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {OrdersComponent} from "./orders/orders/orders.component";

@NgModule({
    declarations: [OrdersComponent],
    imports: [
        CommonModule,
        SharedModule,
        OrdersRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class OrdersModule {
}
