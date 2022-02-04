import { Action, combineReducers } from "@ngrx/store";
import * as fromAppReducer from './application.reducer'

export const appModuleFeatureKey = 'Application data'

export interface ApplicationState {
  [fromAppReducer.appFeatureKey]: fromAppReducer.AppState
}

export interface State {
  [appModuleFeatureKey]: ApplicationState
}

export function reducers(state: ApplicationState | undefined, action: Action) {
  return combineReducers( {
    [fromAppReducer.appFeatureKey]: fromAppReducer.storeReducer
  }) (state, action)
}
