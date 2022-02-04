import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from '../reducer'
import * as fromAppReducer from '../reducer/application.reducer'

export const getAppModuleState = createFeatureSelector<fromReducer.State> (
  fromReducer.appModuleFeatureKey
)

export const getBussinesState = createSelector (
  getAppModuleState,
  (state) => state[fromAppReducer.appFeatureKey].businessData
)

export const getMessage = createSelector (
  getBussinesState,
  (state) => state.message
)

export const getPageEnabled = createSelector (
  getBussinesState,
  (state) => state.pageEnabled
)
