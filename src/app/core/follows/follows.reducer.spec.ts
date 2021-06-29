import {followsReducer, initialState} from "./follows.reducer";

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
} from "./follows.actions";

describe("followsReducer", () => {
    it("should return default state", () => {
        const action = {} as any;
        const state = followsReducer(undefined, action);
        expect(state).toBe(initialState);
    });

    it("should return loading false", () => {
        const action = actionPatientsGetAll();
        const state = followsReducer(undefined, action);
        expect(state.isLoading).toEqual(false);
        expect(state.patient.length).toEqual(0);
    });

    it("should add patient to follows and remove from patients", () => {
        const action = actionPatientsAddToFollow({firstName: 'test'});
        const state = followsReducer(undefined, action);
        expect(state.follow[0].firstName).toEqual('test');
        expect(state.patient.length).toEqual(0);
    });

    it("should set patients with initial state", () => {
        const action = actionSetPatientsData({
            count: 1,
            moreUncountedMatches: false,
            patient: [{firstName: 'test'}],
            undisplayedMatches: false,
            isLoading: false
        });
        const state = followsReducer(undefined, action);
        expect(state.count).toEqual(1);
        expect(state.moreUncountedMatches).toEqual(false);
        expect(state.patient.length).toEqual(1);
        expect(state.undisplayedMatches).toEqual(false);
        expect(state.isLoading).toEqual(false);
    });

    it("should throw patient error message", () => {
        const action = actionGetPatientsDataFailure('Error loading patient data');
        const state = followsReducer(undefined, action);
        expect(state.errorMessage).toEqual('Error loading patient data');
    });

    it("should remove from follow array and added into patient array", () => {
        const action = actionRemovePatientFromFollow({code: 1});
        const state = followsReducer({follow: [{code: 1}], patient: [], order: [],}, action);
        expect(state.follow.length).toEqual(0);
        expect(state.patient.length).toEqual(1);
    });

    it("should remove order from follow and added into orders array", () => {
        const action = actionRemoveOrderFromFollow({orderNum: 1});
        const state = followsReducer({follow: [{orderNum: 1}], patient: [], order: [],}, action);
        expect(state.follow.length).toEqual(0);
        expect(state.order.length).toEqual(1);
    });

    it("should set order with initial state", () => {
        const action = actionSetOrdersData({
            count: 1,
            moreUncountedMatches: false,
            order: [{orderNum: 1}],
            undisplayedMatches: false,
        });
        const state = followsReducer(undefined, action);
        expect(state.count).toEqual(1);
        expect(state.moreUncountedMatches).toEqual(false);
        expect(state.order.length).toEqual(1);
        expect(state.undisplayedMatches).toEqual(false);
    });

    it("should throw patient error message", () => {
        const action = actionGetOrdersDataFailure('Error loading order data');
        const state = followsReducer(undefined, action);
        expect(state.errorMessage).toEqual('Error loading order data');
    });

    it("should return loading false", () => {
        const action = actionOrdersGetAll();
        const state = followsReducer(undefined, action);
        expect(state.isLoading).toEqual(false);
        expect(state.order.length).toEqual(0);
    });

    it("should add order to follows and remove from order", () => {
        const action = actionOrdersAddToFollow({code: 1});
        const state = followsReducer(undefined, action);
        expect(state.follow[0].code).toEqual(1);
        expect(state.order.length).toEqual(0);
    });

});
