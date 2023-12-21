import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/user.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user: User = {} as User

  constructor(private userService: UserService, private notificationService: NotificationService) {
    this.userService.user.subscribe(user => {
      this.user = user;
    })
  }

  showNotification(): void {
    this.notificationService.showNotification('Development in progress...');
  }
}
