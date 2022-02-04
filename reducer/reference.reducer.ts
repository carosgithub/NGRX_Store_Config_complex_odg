import { Assignee } from "@app/common/models/assignee";
import { ReportCategory } from "@app/common/models/reference/reportCategory.model";
import { ReportType } from "@app/common/models/reference/reportType.model";
import { DecisionType } from "@app/common/models/reference/supervisorDecision";
import { createReducer, on } from "@ngrx/store";
import * as fromActions from '../actions/index'

export const screeningFeatureKey = 'Screening Data'

export interface ReferenceState {
  assignees: Assignee[],
  assignmentEntities: {[id: number]:Assignee}
  reportTypes: ReportType[],
  reportCategories: ReportCategory[],
  supervisorDecisions: DecisionType[]
}

export const initialState: ReferenceState = {
  assignees: [],
  assignmentEntities:{},
  reportCategories: [],
  reportTypes: [],
  supervisorDecisions: []
}

export const dataReducer = createReducer (
  initialState,
  on (fromActions.fromReferenceActions.assigneeLoadDataSuccess, (state, { assignees }) => {
    const assignmentEntities = assignees.reduce((
      entities: {[id:number]:Assignee},assignee:Assignee) =>{
        return{
           ...entities,
          [assignee.id]:assignee,
        };
      },
      {
        ...state.assignmentEntities,
      }
      );
    return (
      {
        ...state,
        assignees,
        assignmentEntities
      }
    )
  })
);
