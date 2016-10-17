import { Component, OnInit }     from '@angular/core';

import { Appointment }           from './shared/appointment.model';
import { AppointmentService }    from './shared/appointment.service';

@Component({
	selector:    'hr-appointment-list',
	exportAs:    'hrAppointmentList',
	inputs:      [ 'titleText', 'titleClass', 'baseClass', 'appointmentClass', 'subjectClass' ],
	templateUrl: 'app/appointment-list/appointment-list.component.html',
	styleUrls:   [ 'app/appointment-list/appointment-list.component.css' ],
	providers:   [ AppointmentService ]
})

export class AppointmentList implements OnInit {

	// Inputs
	public titleText: String;
	public titleClass: String;
	public baseClass: String;
	public apmtClass: String;
	public subjectClass: String;

	// Appointments, which will come from AppointmentService.getAppointments()
	appointments: Appointment[] = [];

	constructor(private _apmtService: AppointmentService) {
	}

	getAppointments() {
		this._apmtService
			.getAppointments()
			.then((appointments: Appointment[]) => {
				this.appointments = appointments;
			});
	}

	ngOnInit(): any {
		this.getAppointments();
	}
}