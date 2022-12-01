import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    firstname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,
                                                Validators.email]),
    UserControlInfo: new FormGroup({
    phone: new FormControl('',[Validators.required,
                                                Validators.minLength(9),
                                                Validators.maxLength(15),
                                                Validators.pattern('/^([+]\\d{2})?\\d{10}$/')]),

    age: new FormControl('',Validators.required),
    year: new FormControl('',Validators.required),
    street: new FormControl('',Validators.required),
    education: new FormControl('',Validators.required),
    work: new FormControl('',Validators.required),
    link1: new FormControl('',Validators.required),
    link2: new FormControl('',Validators.required),}),
    active: new FormControl(true,Validators.requiredTrue),
    });
  submit(){
    console.log(this.form)
  }
}
