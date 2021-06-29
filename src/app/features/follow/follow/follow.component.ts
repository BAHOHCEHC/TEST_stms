import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {Store} from "@ngrx/store";
import {distinctUntilChanged, map, takeUntil} from "rxjs/operators";
import {FollowsItems} from "../../../shared/models/follow.model";
import {selectFollows} from "../../../core/follows/follows.selectors";
import {FollowsState} from "../../../core/follows/follows.model";
import {actionRemoveOrderFromFollow, actionRemovePatientFromFollow} from "../../../core/follows/follows.actions";

@Component({
    selector: "st-follow",
    templateUrl: "./follow.component.html",
    styleUrls: ["./follow.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowComponent implements OnDestroy {

    public displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];
    public follows$: Observable<FollowsItems[]> = this.store$.select(selectFollows);
    public follows: FollowsItems[] = [];

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private store$: Store<FollowsState>) {
        this.follows$.subscribe(res => {
            this.follows = res;
        })
    }

    public removeFromFollow(item: FollowsItems): void {
        if (item.code) {
            this.store$.dispatch(actionRemovePatientFromFollow(item));
        } else {
            this.store$.dispatch(actionRemoveOrderFromFollow(item));
        }
    }

    public filter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.follows$.pipe(
            distinctUntilChanged(),
            takeUntil(this.destroyed$),
            map(items => items.filter(item => {
                if (item.firstName) {
                    return item.firstName.toLowerCase().includes(filterValue.trim().toLowerCase());
                } else {
                    return item.orderName.toLowerCase().includes(filterValue.trim().toLowerCase());
                }
            }))
        ).subscribe(res => {
            this.follows = res;
        });

    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
