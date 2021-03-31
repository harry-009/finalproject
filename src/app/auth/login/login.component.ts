import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
        ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
        this.returnUrl = "/dashboard";
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.submitted = true;
        // this.loading=true;
        if(!this.loginForm.valid){
            return;
        }

        localStorage.removeItem("isLoggedIn");

        let email = this.loginForm.controls.email.value;
        let password = this.loginForm.controls.password.value;

        this.authService.login(email, password).subscribe(
            data => {
                   localStorage.setItem("isLoggedIn", "true");
                    

                    this.router.navigateByUrl(this.returnUrl);

            },
            error => {
                console.log(error.status);
                alert("Invalid email/password");
            }
        );
    }
}
