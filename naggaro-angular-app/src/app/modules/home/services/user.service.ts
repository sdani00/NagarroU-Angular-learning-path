import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isAdminSubject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  public get adminChanges() {
    return this.isAdminSubject.asObservable();
  }

  public setAdmin(value: boolean): void {
    this.isAdminSubject.next(value);
  }
}
