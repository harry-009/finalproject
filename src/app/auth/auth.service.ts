import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Auth} from './auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private httpClient: HttpClient) { }

	login(email: string, password: string) {
		let api = `http://198.251.65.146:4605/adminsignin`
		
		return this.httpClient.post<Auth>(api, {email: email, password: password});
							
	}
}
