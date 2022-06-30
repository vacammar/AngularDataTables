import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
    declarations: [
        AppComponent,
        DataTableComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
