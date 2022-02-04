
import { Action } from "@ngrx/store";
import * as fromReferenceReducers from './reference.reducer'
import * as fromBisReducers from './business.reducer'

export const appFeatureKey = 'Screening data'

export interface AppState {
  referenceData: fromReferenceReducers.ReferenceState
  businessData: fromBisReducers.BusinessState
}

export const INITIAL_APPLICATION_STATE: AppState = {
  referenceData: fromReferenceReducers.initialState,
  businessData: fromBisReducers.initialState
}

export function storeReducer(
  state: AppState = INITIAL_APPLICATION_STATE,
  action: Action
): AppState {

  return ({
    referenceData: fromReferenceReducers.dataReducer(state.referenceData, action),
    businessData: fromBisReducers.bissReducer(state.businessData, action)
  })
}
