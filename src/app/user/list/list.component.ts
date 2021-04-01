import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.getAllUsers()
    }
    
    getAllUsers(){
        
        this.userService.getAllUsers().subscribe(data => {console.log(data)});
    }
}
