import { Assignee } from "@app/common/models/assignee";
import { ReportCategory } from "@app/common/models/reference/reportCategory.model";
import { ReportType } from "@app/common/models/reference/reportType.model";
import { DecisionType } from "@app/common/models/reference/supervisorDecision";
import { createAction, props } from "@ngrx/store";

export const ASSIGNEE_LOAD_DATA = '[ASSIGNEE] - Load data'
export const ASSIGNEE_LOAD_DATA_SUCCES = '[ASSIGNEE] - Load data success'
export const ASSIGNEE_LOAD_DATA_FAIL = '[ASSIGNEE] - Load data fail'

export const assigneeLoadData = createAction (
  ASSIGNEE_LOAD_DATA
)

export const assigneeLoadDataSuccess = createAction (
  ASSIGNEE_LOAD_DATA_SUCCES,
  props < {assignees: Assignee []} > ()
)

export const assigneeLoadDataFail = createAction (
  ASSIGNEE_LOAD_DATA_FAIL,
  props < {errorMsg: string} > ()
)
