import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissingNumberComponent } from './components/missing-number/missing-number.component';
import {MaterialModule} from './material/material.module';
import { MissingDialogueComponent } from './components/missing-dialogue/missing-dialogue.component';
import { NestedComponentsComponent } from './components/nested-components/nested-components.component';
import { ComponentXComponent } from './components/nested-components/component-x/component-x.component';
import { ComponentYComponent } from './components/nested-components/component-y/component-y.component';
import { FormCmpComponent } from './components/form-cmp/form-cmp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CornCmptsComponent} from './components/corn-cmpts/corn-cmpts.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingNumberComponent,
    MissingDialogueComponent,
    NestedComponentsComponent,
    ComponentXComponent,
    ComponentYComponent,
    CornCmptsComponent ,
    FormCmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
