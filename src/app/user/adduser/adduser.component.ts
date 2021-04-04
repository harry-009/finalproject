import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
    selector: 'app-adduser',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

    adduserForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {

        this.adduserForm = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            cphone: ['', Validators.required],
            role: ['', Validators.required],
            companyname: ['', Validators.required],
            email: ['', Validators.required],
        });
        this.returnUrl = "/home";

    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.submitted = true;

        if (!this.adduserForm.valid)
            return;
            
        this.userService.addUser(   this.adduserForm.controls.fname.value, 
                                    this.adduserForm.controls.lname.value,
                                    this.adduserForm.controls.email.value,
                                    this.adduserForm.controls.cphone.value,
                                    this.adduserForm.controls.companyname.value,
                                    this.adduserForm.controls.role.value, ).subscribe(data => {
                                            console.log(data)
                                        });

    }
}
