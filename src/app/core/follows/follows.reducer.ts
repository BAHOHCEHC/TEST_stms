import {FollowsState} from './follows.model';
import {
    actionGetOrdersDataFailure,
    actionGetPatientsDataFailure,
    actionOrdersAddToFollow,
    actionOrdersGetAll,
    actionPatientsAddToFollow,
    actionPatientsGetAll,
    actionRemoveOrderFromFollow,
    actionRemovePatientFromFollow,
    actionSetOrdersData,
    actionSetPatientsData
} from './follows.actions';
import {Action, createReducer, on} from '@ngrx/store';

export const initialState: FollowsState = {
    patient: [],
    follow: [],
    order: [],
    isLoading: false,
    errorMessage: '',
};

const reducer = createReducer(
    initialState,
    // ****Patients*****
    on(
        actionPatientsGetAll,
        (state, action) => ({...state, ...action, isLoading: true})
    ),
    on(
        actionSetPatientsData,
        (state, action) => ({...state, ...action, isLoading: false})
    ),
    on(
        actionGetPatientsDataFailure,
        (state, action) => ({...state, errorMessage: action.errorMsg, isLoading: false})
    ),
    on(
        actionPatientsAddToFollow,
        (state, action) => ({
            ...state,
            patient: state.patient.filter(item => item.code !== action.code),
            follow: state.follow.concat(action)
        })
    ),
    // *********Follows items*******
    on(
        actionRemovePatientFromFollow,
        (state, action) => ({
            ...state,
            follow: state.follow.filter(item => item.code !== action.code),
            patient: state.patient.concat(action)
        })
    ),
    on(
        actionRemoveOrderFromFollow,
        (state, action) => ({
            ...state,
            follow: state.follow.filter(item => item.orderNum !== action.orderNum),
            order: state.order.concat(action)
        })
    ),
    // **********Orders***********
    on(
        actionOrdersGetAll,
        (state, action) => ({...state, ...action, isLoading: true})
    ),
    on(
        actionSetOrdersData,
        (state, action) => ({...state, ...action, isLoading: false})
    ),
    on(
        actionGetOrdersDataFailure,
        (state, action) => ({...state, errorMessage: action.errorMsg, isLoading: false})
    ),
    on(
        actionOrdersAddToFollow,
        (state, action) => ({
            ...state,
            order: state.order.filter(item => item.orderNum !== action.orderNum),
            follow: state.follow.concat(action)
        })
    ),
);

export function followsReducer(
    state: FollowsState | undefined,
    action: Action
) {
    return reducer(state, action);
}
