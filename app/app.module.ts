import { NgModule }         from '@angular/core';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { AppointmentList }  from './appointment-list/appointment-list.component';

@NgModule({
	imports:      [ NgbModule, BrowserModule ],
	declarations: [ AppComponent, AppointmentList ],
	bootstrap:    [ AppComponent ]
})

export class AppModule {
}
