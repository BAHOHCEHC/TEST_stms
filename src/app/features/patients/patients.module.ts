import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../../shared/shared.module";

import {PatientsRoutingModule} from "./patients-routing.module";
import {PatientsComponent} from "./patients/patients.component";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [PatientsComponent],
    imports: [
        CommonModule,
        SharedModule,
        PatientsRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    providers: [],
})
export class PatientsModule {
}
