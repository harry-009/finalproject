import { Component, OnInit } from '@angular/core';
import { ResponseAPI } from '../user/response';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    totalUsers: number = 0;
    totalCategories: number = 0;

    response: ResponseAPI = {success: true, total: 0, users:[]};

    constructor( private userService: UserService) { }

    ngOnInit(): void {
        this.getAllUsersCount();
    }

    getAllUsersCount(){
        
        this.userService.getAllUsers().subscribe(
            data => {
                this.response = JSON.parse(JSON.stringify(data));
                this.totalUsers = this.response.total;
            }
        );
    }
}
