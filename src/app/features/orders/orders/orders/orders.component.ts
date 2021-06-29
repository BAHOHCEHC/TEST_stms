import {ChangeDetectionStrategy, Component, OnDestroy} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs";
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import {Order} from "../../../../shared/models/order.model";
import {selectIsLoading, selectOrders} from "../../../../core/follows/follows.selectors";
import {FollowsState} from "../../../../core/follows/follows.model";
import {actionOrdersAddToFollow, actionOrdersGetAll} from "../../../../core/follows/follows.actions";

@Component({
    selector: "st-orders",
    templateUrl: "./orders.component.html",
    styleUrls: ["./orders.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnDestroy {

    public displayedColumns: string[] = ['orderName', 'identifier', 'creationDate', 'actions'];
    public orders$: Observable<Order[]> = this.store$.select(selectOrders);
    public loading$: Observable<boolean> = this.store$.select(selectIsLoading);

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private store$: Store<FollowsState>) {
    }

    public getOrders(): void {
        this.store$.dispatch(actionOrdersGetAll());
        this.orders$.pipe(takeUntil(this.destroyed$)).subscribe();
        this.loading$.pipe(takeUntil(this.destroyed$)).subscribe();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    public addToFollow(order: Order): void {
        this.store$.dispatch(actionOrdersAddToFollow(order));
    }
}
