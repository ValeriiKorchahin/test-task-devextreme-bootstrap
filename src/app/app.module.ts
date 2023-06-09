import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ControlsComponent } from './components/controls/controls.component';
import {routes} from "./routes/routes";
import {DxDataGridModule, DxGalleryModule, DxTemplateModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { OnImageLoadingDirective } from './directives/on-image-loading.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    ControlsComponent,
    AboutComponent,
    OnImageLoadingDirective,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        DxDataGridModule,
        DxTemplateModule,
        DxGalleryModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
