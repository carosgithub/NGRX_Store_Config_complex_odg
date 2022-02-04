import { HotlineReport } from "@app/common/models/hotlineReport";
import { createAction, props } from "@ngrx/store";
import { BusinessState } from "../reducer/business.reducer";

export const DATA_GET_USER = '[DATA] Get user person id';

export const dataGetUserPersonId = createAction (
  DATA_GET_USER,
  props < {userId: number} >()
);

export const SET_HOTLINE_REPORT = '[DATA] set hotline in store';
export const setHotlineReport = createAction (
  SET_HOTLINE_REPORT,
  props < {hotlineReport: HotlineReport} >()
);

export const HOTLINE_BUSINESS_SAVE = '[HOTLINE BUSINESS] Save';
export const HOTLINE_BUSINESS_SAVE_SUCCESS = '[HOTLINE BUSINESS] Save success';
export const HOTLINE_BUSINESS_SAVE_FAIL = '[HOTLINE BUSINESS] Save fail';

export const hotlineBusinessSave = createAction(
  HOTLINE_BUSINESS_SAVE,
  props < {business: BusinessState} >()
);

export const hotlineBusinessSaveSuccess = createAction(
  HOTLINE_BUSINESS_SAVE_SUCCESS,
  props < {business: BusinessState} >()
);

export const hotlineBusinessSaveFail = createAction(
  HOTLINE_BUSINESS_SAVE_FAIL,
  props< { errorMsg: string} > ()
);

export const RESET_MESSAGE = '[DATA] Reset message'
export const resetMessage = createAction(
  RESET_MESSAGE
)

export const SET_PAGE_ENABLED = '[DATA] Set page enable/disabled'
export const setPageEnabled = createAction(
  SET_PAGE_ENABLED,
 props< {pageEnabled: boolean} > ()
)
