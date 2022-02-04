import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ScreeningEffects } from "./effects/screening.effects";
import * as fromAppReducers from './reducer'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAppReducers.appModuleFeatureKey, fromAppReducers.reducers),
    EffectsModule.forFeature([ScreeningEffects]),
  ],
  declarations: [],
  providers: []
})
export class ScreeningStoreModule {}
