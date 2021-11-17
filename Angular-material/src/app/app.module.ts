import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DropDownListsComponent } from './drop-down-lists/drop-down-lists.component';
import { InputsComponent } from './inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { TextAreaComponent } from './text-area/text-area.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from 'mat-components.module';
import { TypographyComponent } from './typography/typography.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DropDownListsComponent,
    InputsComponent,
    TextAreaComponent,
    DatePickerComponent,
    IconsComponent,
    ButtonsComponent,
    ChipsComponent,
    ProgressSpinnerComponent,
    TooltipComponent,
    TabsComponent,
    DialogComponent,
    EditCourseComponent,
    TypographyComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass : CourseService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
