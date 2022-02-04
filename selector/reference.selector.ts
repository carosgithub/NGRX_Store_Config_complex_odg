import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from '../reducer'
import * as fromAppReducer from '../reducer/application.reducer'

export const getAppModuleState = createFeatureSelector<fromReducer.State> (
  fromReducer.appModuleFeatureKey
)

export const getReferenceData = createSelector (
  getAppModuleState,
  (state) => state[fromAppReducer.appFeatureKey].referenceData
)

export const getAssignees = createSelector (
  getReferenceData,
  (state) => state.assignees
)

export const getAssigneesById = (Id: number) => createSelector (
  getAssignees,
  (assignees) => assignees.find(row => row.id == Id)
)

export const getAssignmentEntitiesStore = createSelector(
  getReferenceData,
 (state) =>  state.assignmentEntities
 )

 export const getAssignmentEntityById = (Id: number) => createSelector(
   getAssignmentEntitiesStore,
   (assignees) => assignees[Id]
 )
