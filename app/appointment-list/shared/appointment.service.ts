import { Injectable }           from '@angular/core';

import { MOCK_APPOINTMENTS }    from './mock-appointments';

@Injectable()

// AppointmentListService exposes the getAppointments() method that returns a list of appointments
export class AppointmentService {
	getAppointments() {
		return Promise.resolve(MOCK_APPOINTMENTS.appointments);
	}
}
