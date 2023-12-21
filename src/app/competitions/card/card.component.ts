import { Component, Input } from '@angular/core';
import { Statistics } from '../../shared/statistics.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CompetitionItemComponent {
  @Input() statistics: Statistics = {} as Statistics;
  @Input() index: number = 1;

  constructor(public notificationService: NotificationService) {}

  showNotification(): void {
    this.notificationService.showNotification('Development in progress...');
  }
}
