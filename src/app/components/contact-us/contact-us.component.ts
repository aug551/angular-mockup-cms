import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

let exampleSchedule = [
  {
    dayOfWeek: "Monday",
    daySchedule: {
      startHour: "9:00",
      endHour: "17:00"
    }
  },
  {
    dayOfWeek: "Tuesday",
    daySchedule: {
      startHour: "9:00",
      endHour: "17:00"
    }
  },
  {
    dayOfWeek: "Wednesday",
    daySchedule: {
      startHour: "9:00",
      endHour: "17:00"
    }
  },
  {
    dayOfWeek: "Thursday",
    daySchedule: {
      startHour: "9:00",
      endHour: "17:00"
    }
  },
  {
    dayOfWeek: "Friday",
    daySchedule: {
      startHour: "9:00",
      endHour: "17:00"
    }
  },
  {
    dayOfWeek: "Saturday",
    daySchedule: {
      startHour: "",
      endHour: ""
    }
  },
  {
    dayOfWeek: "Sunday",
    daySchedule: {
      startHour: "",
      endHour: ""
    }
  }
]

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.email, Validators.required]);
  phone = new FormControl("", [Validators.required]);
  message = new FormControl("", [Validators.required]);

  contactForm!: FormGroup;

  daysOfWeek: Array<{
    dayOfWeek: string,
    daySchedule: {
      startHour: string,
      endHour: string
    }
  }> = exampleSchedule;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      fromName: this.name,
      fromEmail: this.email,
      fromPhone: this.phone,
      message: this.message
    });
  }

  sendMessage() {
    console.log("test");
  }

}
