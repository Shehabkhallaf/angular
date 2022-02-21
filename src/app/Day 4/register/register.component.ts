import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators ,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup ;
 
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group ({
      emailaddress:  new FormControl('',[Validators.required,Validators.email,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
      fullname : new FormControl ('',Validators.required),
      username: new FormControl ('',[Validators.required,Validators.pattern("/^\S*$/")]),
      userpassword: new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")]),
      ConfirmPassword : new FormControl('',[Validators.required])
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {}

  submitregisterForm() {
    console.log(this.registerForm);
  }
}
