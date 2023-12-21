import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { userData } from '../shared/user-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get user(): Observable<User> {
    return of(userData);
  }
}
