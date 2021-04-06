import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getAllUsers() {
        let api = `http://198.251.65.146:4605/users?page=1&search=`;

        let requestOptions = {
            headers: this.getHeaders(),
        }

        return this.httpClient.get(api, requestOptions);
    }

    getUser(id:string){
        let api = `http://198.251.65.146:4605/user?id=${id}`;

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

    addUser(firstName:string, lastName:string, email:string, mobileNo:string, companyName:string, role:string){
        let api = `http://198.251.65.146:4605/users`;

        let requestOptions = {
            headers: this.getHeaders(),
        }

        let body = {
            address: "",
            city: "",
            companyName:companyName,
            country: "",
            description: "",
            email: email,
            expMonths: "",
            expYear: "",
            firstName:firstName,
            image: "",
            isFeatured: null,
            lastName: lastName,
            linkedinProfile: "",
            mobileNo: mobileNo,
            rank: "",
            role: "U",
            skills: [],
            zipcode: "",
        }

        return this.httpClient.post(api, body, requestOptions);
    }

    deleteUser(id: string) {
        let api = `http://198.251.65.146:4605/delete?id=${id}&model=users`;

        let requestOptions = {
            headers: this.getHeaders(),
        }

        return this.httpClient.delete(api, requestOptions);
    }
    

    updateUser(id:string, firstName:string, lastName:string, email:string, mobileNo:string, companyName:string, role:string){
        let api = `http://198.251.65.146:4605/editProfile?id=${id}`;

        let requestOptions = {
            headers: this.getHeaders(),
        }

        let body = {
            address: "",
            city: "",
            companyName:companyName,
            country: "",
            description: "",
            email: email,
            expMonths: "",
            expYear: "",
            firstName:firstName,
            image: "",
            isFeatured: null,
            lastName: lastName,
            linkedinProfile: "",
            mobileNo: mobileNo,
            rank: "",
            role: role,
            skills: [],
            zipcode: "",
        }

        return this.httpClient.put(api, body, requestOptions);
    }

}
