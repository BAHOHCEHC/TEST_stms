import {createAction, props} from '@ngrx/store';
import {Patient, PatientDataSource} from "../../shared/models/patient.model";
import {Order, OrdersDataSource} from "../../shared/models/order.model";
import {FollowsItems} from "../../shared/models/follow.model";

export const actionPatientsGetAll = createAction(
    '[Patients] Get all patients data'
);

export const actionSetPatientsData = createAction(
    '[Patients] Set patients data',
    props<PatientDataSource>()
);

export const actionGetPatientsDataFailure = createAction(
    '[Patients] Get patients data failure',
    (errorMsg: string = 'Error loading patient data') => ({errorMsg})
);

export const actionPatientsAddToFollow = createAction(
    '[Patients] Add to follow',
    props<Patient>()
);
// *******Follow******
export const actionRemovePatientFromFollow = createAction(
    '[Follows] Remove patient from follow',
    props<FollowsItems>()
);
export const actionRemoveOrderFromFollow = createAction(
    '[Follows] Remove order from follow',
    props<FollowsItems>()
);

// *****Order******
export const actionOrdersGetAll = createAction(
    '[Orders] Get all orders data'
);

export const actionSetOrdersData = createAction(
    '[Orders] Set orders data',
    props<OrdersDataSource>()
);
export const actionGetOrdersDataFailure = createAction(
    '[Orders] Get orders data failure',
    (errorMsg: string = 'Error loading patient data') => ({errorMsg})
);

export const actionOrdersAddToFollow = createAction(
    '[Orders] Add to follow',
    props<Order>()
);
