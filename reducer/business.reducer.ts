import { HotlineReport } from "@app/common/models/hotlineReport";
import { BizUtility } from "@app/shared/business/BizUtility";
import { createReducer, on } from "@ngrx/store";
import * as fromActions from '../actions/index'

export const bissFeatureKey = 'Screening Business';

export interface BusinessState {
  hotlineReport: HotlineReport,
  isCPS: boolean,
  isProvider: boolean,
  userId: number,
  message: string,
  pageDisabled: boolean
}

export const initialState: BusinessState = {
  hotlineReport: undefined,
  isCPS: false,
  isProvider: false,
  userId: undefined,
  message: undefined,
  pageDisabled: true
}

export const bissReducer = createReducer (
  initialState,
  on (fromActions.fromDataActions.dataGetUserPersonId, ( state, { userId }) => {
    return ( {
      ...state,
      userId
    })
  }),
  on (fromActions.fromDataActions.setHotlineReport, ( state, { hotlineReport }) => {
    const INIT_CPS_REPORT_TYPE_ID = 1; // CPS
    const INIT_SCREENING_DECISION_ID = 1; // Pending
    const SUPERVISOR_DECISION_DELETE = 1; // within 24H
    const PROVIDER_ID_DELETE = 123;

    const reportTypeId = hotlineReport?.reportTypeId ? hotlineReport?.reportTypeId : INIT_CPS_REPORT_TYPE_ID;
    const reportCategoryId = hotlineReport?.reportCategoryId;
    const screeningDecisionId = hotlineReport?.responseTimeTypeId ? hotlineReport?.responseTimeTypeId : INIT_SCREENING_DECISION_ID;

    const hotlineReportNew = {
        ...hotlineReport,
        reportTypeId,
        supervisorDecisionId: SUPERVISOR_DECISION_DELETE,
        screeningDecisionId,
        providerId: PROVIDER_ID_DELETE,
        caseNameFirst: 'Ana',
        caseNameLast: 'Cotter',
        caseNameMiddle: 'M'
    };

    const businessCalc = BizUtility.processReportTypeChange(reportTypeId, reportCategoryId);
    return ({
      ...state,
      hotlineReport: hotlineReportNew,
      isCPS: businessCalc.isCPS,
      isProvider: businessCalc.isProvider
    })
  }),
  on (fromActions.fromDataActions.hotlineBusinessSaveSuccess, ( state, { business }) => {
    return ({
      ...state,
      hotlineReport: business.hotlineReport,
      isCPS: business.isCPS,
      isProvider: business.isProvider,
      message: 'Data automatically saved.'
    })
  }),
  on (fromActions.fromDataActions.resetMessage, ( state ) => {
    return ({
      ...state,
      message: null
    })
  }),
  on (fromActions.fromDataActions.setPageEnabled, ( state, { pageEnabled }) => {
    return ({
      ...state,
      pageDisabled: pageEnabled
    })
  })
)
