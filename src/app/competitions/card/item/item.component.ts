import { Component, Input } from '@angular/core';
import { StatisticsData } from '../../../shared/statistics.model';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() data: StatisticsData = {} as StatisticsData;
  @Input() currentIndex: number = 1;

  constructor(private notificationService: NotificationService) {}

  getSuffix(index: number): string {
    if (index === 1) {
      return 'st';
    } else if (index === 2) {
      return 'nd';
    } else if (index === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }

  showNotification(): void {
    this.notificationService.showNotification('Development in progress...');
  }
}
