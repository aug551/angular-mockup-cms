import { Component, OnInit } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user!: User;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe((user) => {
      this.user = user;
    })
  }

}
