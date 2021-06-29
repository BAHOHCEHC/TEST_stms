import {createFeatureSelector, createSelector} from '@ngrx/store';

import {FollowsState} from './follows.model';

export const selectPatientsFeature = createFeatureSelector<FollowsState>('follows');
export const selectPatients = createSelector(
    selectPatientsFeature,
    (state: FollowsState) => state?.patient
);

export const selectFollows = createSelector(
    selectPatientsFeature,
    (state: FollowsState) => state?.follow
);

export const selectOrders = createSelector(
    selectPatientsFeature,
    (state: FollowsState) => state?.order
);

export const selectIsLoading = createSelector(
    selectPatientsFeature,
    (state: FollowsState) => state?.isLoading
);
