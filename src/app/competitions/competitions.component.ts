import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Statistics } from '../shared/statistics.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss'
})
export class CompetitionsComponent implements OnInit {
  public statistics: Statistics[] = [];

  constructor(private statisticsService: StatisticsService, public notificationService: NotificationService) {}

  ngOnInit() {
    this.statisticsService.statistics.subscribe(statistics => {
      this.statistics = statistics;
    });
  }

  showNotification(): void {
    this.notificationService.showNotification('Development in progress...');
  }
}
