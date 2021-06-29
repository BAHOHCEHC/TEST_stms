import {AppState} from "../core.state";
import {Patient} from "../../shared/models/patient.model";
import {Order} from "../../shared/models/order.model";
import {FollowsItems} from "../../shared/models/follow.model";

export interface FollowsState {
    patient: Patient[];
    order: Order[];
    follow: FollowsItems[];
    isLoading?: boolean;
    errorMessage?: string;
    count?: number;
    moreUncountedMatches?: boolean;
    undisplayedMatches?: boolean;
}

export interface State extends AppState {
    follows: FollowsState;
}
