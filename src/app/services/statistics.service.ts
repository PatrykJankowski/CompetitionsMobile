import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistics } from '../shared/statistics.model';
import { data } from '../shared/statistics-data';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  get statistics(): Observable<Statistics[]> {
    return of(data);
  }
}
