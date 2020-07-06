import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeaFormComponent } from './tea-form/tea-form.component';
import {HttpClientModule} from '@angular/common/http';
import { EditTeaComponent } from './edit-tea/edit-tea.component';

@NgModule({
  declarations: [
    AppComponent,
    TeaFormComponent,
    EditTeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
