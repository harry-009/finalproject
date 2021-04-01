import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getAllUsers() {
        let api = `http://198.251.65.146:4605/users?page=&search=`;

        let requestOptions = {
            headers: this.getHeaders(),
        }

        return this.httpClient.get(api, requestOptions);
    }

    private getHeaders() {
        let token = localStorage.getItem("access_token");;

        const headerDict = {
            //'Content-Type': 'application/json',
            //'Accept': 'application/json',
            //'Access-Control-Allow-Headers': 'Content-Type',
            //'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
            //'Cookie': 'sails.sid=s%3AK_iBFKB4q4gBOQ9YDaHT8ksqKl4uRkXe.wdp2PBXGFra3CVv09SVoPMkL%2BV4GmoyxQpX0XSeKhl8'
        }


        return new HttpHeaders(headerDict);
    }
}
