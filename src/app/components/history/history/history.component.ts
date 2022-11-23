import { Component, Input } from '@angular/core';
import { User } from 'src/app/services/users.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  @Input() user!: User;


}
