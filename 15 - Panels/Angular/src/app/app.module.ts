import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopsComponent } from './for-loops/for-loops.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { TrackByComponent } from './track-by/track-by.component';
import { TraversalOperatorComponent } from './traversal-operator/traversal-operator.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyExcerciseComponent } from './zippy-excercise/zippy-excercise.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LikeButtonComponent,
    IfElseComponent,
    SwitchCaseComponent,
    ForLoopsComponent,
    ChangeDetectionComponent,
    TrackByComponent,
    TraversalOperatorComponent,
    CustomDirectivesComponent,
    InputFormatDirective,
    ZippyExcerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
