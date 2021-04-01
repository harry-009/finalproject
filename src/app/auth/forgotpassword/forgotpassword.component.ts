import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-forgotpassword',
    templateUrl: './forgotpassword.component.html',
    styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

    forgotpasswordForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
        this.forgotpasswordForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
        });
    }

    ngOnInit(): void {
    }
    onSubmit() {
        this.submitted = true;
        // this.loading=true;   

        if (!this.forgotpasswordForm.valid) {
            return;
        }

        this.authService.forgotPassword(this.forgotpasswordForm.controls.username.value).subscribe(
            data => {
                console.log(data);
                alert("password sent to your email.");
            },
            error => {
                console.log(error);
                alert("No such user exist.");
            }
        );
        
    }

}

