import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<string | null>(null);
  public notification$ = this.notificationSubject.asObservable();

  showNotification(message: string): void {
    this.notificationSubject.next(message);

    setTimeout(() => {
      this.hideNotification();
    }, 3000);
  }

  hideNotification(): void {
    this.notificationSubject.next(null);
  }
}
