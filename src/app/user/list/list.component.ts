import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../user.service';

import {ResponseAPI} from '../response';
import { User } from '../user';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
    response: ResponseAPI = {success: true, total: 0, users:[]};

    users:User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getAllUsers()
    }
    
    getAllUsers(){
        
        this.userService.getAllUsers().subscribe(
            data => {
                this.response = JSON.parse(JSON.stringify(data));
                this.users = this.response.users; 
                
            }
        );
    }
}
