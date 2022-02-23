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
      username: new FormControl ('',[Validators.required,Validators.pattern("^[^\r\n\t\f\v ]*$")]),
      userpassword: new FormControl ('',[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]),
      ConfirmPassword:  ['', {
        Validators: ['' ,
          Validators.required,
          this.checkIfMatchingPasswords('userpassword', 'ConfirmPassword')
        ]
      }]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {}

  submitregisterForm() {
    console.log(this.registerForm);
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
  }
}
