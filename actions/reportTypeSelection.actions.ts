import { HotlineReport } from "@app/common/models/hotlineReport";
import { createAction, props } from "@ngrx/store";
import { BusinessState } from "../reducer/business.reducer";

export const REPORT_TYPE_SELECTION_CHANGED = '[REPORT TYPE] Selection changed';

export const reportTypeSelectionChanged = createAction(
  REPORT_TYPE_SELECTION_CHANGED,
  props <{ selection: Partial<BusinessState>}> ()
)

