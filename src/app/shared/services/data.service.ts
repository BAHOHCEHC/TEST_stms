import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrdersDataSource} from "../models/order.model";
import {PatientDataSource} from "../models/patient.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    orderUrl = "https://api.mocki.io/v2/79fb05cb";
    patientsUrl = "https://api.mocki.io/v2/51597ef3";

    constructor(private http: HttpClient) {
    }

    getOrders(): Observable<OrdersDataSource> {
        return this.http.get<OrdersDataSource>(this.orderUrl);
    }

    getAllPatients(): Observable<PatientDataSource> {
        return this.http.get<PatientDataSource>(this.patientsUrl);
    }
}
