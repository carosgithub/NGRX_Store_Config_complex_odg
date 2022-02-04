import { Injectable } from '@angular/core';
import { Assignee } from '@app/common/models/assignee';
import { HotlineReportingDetailService } from '@app/common/services/hotline-reporting-detail.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions'
import { HotlineReportService } from '@app/common/services/hotline-report.service';
import { HotlineReport } from '@app/common/models/hotlineReport';
import { Store } from '@ngrx/store';
import * as fromReducers from '../../store/reducer/application.reducer'

@Injectable()
export class ScreeningEffects {
  constructor(
    private store: Store<fromReducers.AppState>,
    private actions$: Actions,
    private hotlineReportService: HotlineReportService,
    private hotlineReportingDetailService: HotlineReportingDetailService,
  ) {}

    loadAssignee$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromActions.fromReferenceActions.assigneeLoadData),
        switchMap((() => {
          return this.hotlineReportingDetailService.getAssignmentWorker().pipe(
            map(( assignees: Assignee[] ) =>
              fromActions.fromReferenceActions.assigneeLoadDataSuccess( { assignees })),
            catchError((err) =>
              of(fromActions.fromReferenceActions.assigneeLoadDataFail( {  errorMsg: err.message }))
            )
          )
        }))
      )
    );

    saveHotline$ = createEffect(() =>
        this.actions$.pipe(
          ofType(fromActions.fromDataActions.hotlineBusinessSave),
          switchMap((( { business }) => {
            return this.hotlineReportService.$assignmentReportUpdate( business.hotlineReport ).pipe (
              map(( hotlineReportSaved: HotlineReport) =>
                fromActions.fromDataActions.hotlineBusinessSaveSuccess( { business})
              ),
              catchError(( err ) =>
                of(fromActions.fromDataActions.hotlineBusinessSaveFail ( { errorMsg: err.message}))
              )
            )
          }))
        )
    );

}
