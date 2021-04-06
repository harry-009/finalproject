import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

    editUserForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string = "";

    user: User  = {
        id: "",
        companyName: "",
        createdAt: "",
        email: "",
        firstName: "",
        fullName: "",
        lastName: "",
        mobileNo: "",
    };

    constructor(
        private formBuilder: FormBuilder, 
        private activatedRoute: ActivatedRoute,
        private router: Router, 
        private userService: UserService) {
        
            this.editUserForm = this.formBuilder.group({
            fname: ['', Validators.required],
            lname: ['', Validators.required],
            cphone: ['', Validators.required],
            role: ['', Validators.required],
            companyname: ['', Validators.required],
            email: ['', Validators.required],
        });
        this.returnUrl = "/userlist";
     }

    ngOnInit(): void {
        let id = this.activatedRoute.snapshot.params.id;
        //  console.log(id);

        this.getSingleUser(id);
    }

    getSingleUser(id:string){
        this.userService.getUser(id).subscribe(data => {
            let response = JSON.parse(JSON.stringify(data));
            // console.log(response.data)
            this.user = response.data;

            this.setUserValues();
            
        });
    }

    setUserValues() {
        this.editUserForm.controls.fname.setValue(this.user.firstName); 
        this.editUserForm.controls.lname.setValue(this.user.lastName);
        this.editUserForm.controls.email.setValue(this.user.email);
        this.editUserForm.controls.cphone.setValue(this.user.mobileNo);
        this.editUserForm.controls.companyname.setValue(this.user.companyName);
        this.editUserForm.controls.role.setValue(this.user.role);
    }

    onSubmit() {
        this.submitted = true;

        if (!this.editUserForm.valid)
            return;
            
        this.userService.updateUser(   this.user.id,
                                    this.editUserForm.controls.fname.value, 
                                    this.editUserForm.controls.lname.value,
                                    this.editUserForm.controls.email.value,
                                    this.editUserForm.controls.cphone.value,
                                    this.editUserForm.controls.companyname.value,
                                    this.editUserForm.controls.role.value, ).subscribe(data => {
                                            console.log(data);
                                            alert("Updated successfully.");
                                            this.router.navigateByUrl(this.returnUrl);
                                        });

    }

}
