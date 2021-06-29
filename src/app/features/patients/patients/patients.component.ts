import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable, ReplaySubject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Patient} from "../../../shared/models/patient.model";
import {selectIsLoading, selectPatients} from "../../../core/follows/follows.selectors";
import {FollowsState} from "../../../core/follows/follows.model";
import {actionPatientsAddToFollow, actionPatientsGetAll} from "../../../core/follows/follows.actions";

@Component({
    selector: "st-patients",
    templateUrl: "./patients.component.html",
    styleUrls: ["./patients.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnDestroy {

    public displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];
    public patients$: Observable<Patient[]> = this.store$.select(selectPatients);
    public loading$: Observable<boolean> = this.store$.select(selectIsLoading);

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private store$: Store<FollowsState>) {
    }

    public getPatientsData(): void {
        this.store$.dispatch(actionPatientsGetAll())
        this.patients$.pipe(takeUntil(this.destroyed$)).subscribe();
        this.loading$.pipe(takeUntil(this.destroyed$)).subscribe();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    public addToFollow(patient: Patient): void {
        this.store$.dispatch(actionPatientsAddToFollow(patient));
    }
}
