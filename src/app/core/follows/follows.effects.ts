import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";

import {
    actionGetPatientsDataFailure,
    actionOrdersGetAll,
    actionPatientsGetAll,
    actionSetOrdersData,
    actionSetPatientsData
} from "./follows.actions";
import {State} from "./follows.model";
import {DataService} from "../../shared/services/data.service";

@Injectable()
export class FollowsEffects {

    getAllPatients$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(actionPatientsGetAll),
                switchMap((res) =>
                    this.dataService.getAllPatients()
                        .pipe(
                            map(res => {
                                return actionSetPatientsData(res);
                            }),
                            catchError((error: Error) => of(actionGetPatientsDataFailure(error.message)))
                        )
                ))
        }
    );

    getAllOrders$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(actionOrdersGetAll),
                switchMap((res) =>
                    this.dataService.getOrders()
                        .pipe(
                            map(res => {
                                return actionSetOrdersData(res);
                            }),
                            catchError((error: Error) => of(actionGetPatientsDataFailure(error.message)))
                        )
                ))
        }
    );

    constructor(
        private actions$: Actions,
        private store: Store<State>,
        private dataService: DataService,
    ) {
    }
}
