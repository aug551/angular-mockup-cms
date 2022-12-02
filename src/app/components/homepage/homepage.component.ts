import { Component, OnInit, Input } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @Input() user!: User;
  navClass = '';
  activeElement = 4;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  setNavClass(c: string) {
    var timer = null;
    if (timer == null) {
      timer = window.setTimeout(() => {
        this.navClass = c;
      }, 115);
    }
  }

  logout(): void {
    this.usersService.logout();
  }

  navigateToPage($event: number) {
    this.activeElement = $event;
  }

}
