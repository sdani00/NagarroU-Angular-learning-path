import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../modules/home/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  public isAdmin: boolean = false;

  constructor(private userService: UserService) {
    this.userService.adminChanges.subscribe((x) => (this.isAdmin = x));
  }

  onToggleChange(){
    this.userService.setAdmin(!this.isAdmin);
  }
}
