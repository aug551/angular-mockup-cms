import { Component, OnInit } from '@angular/core';

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
  daysOfWeek: Array<{
    dayOfWeek: string,
    daySchedule: {
      startHour: string,
      endHour: string
    }
  }> = exampleSchedule;

  constructor() { }

  ngOnInit(): void {
  }

}
