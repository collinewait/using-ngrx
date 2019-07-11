import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './app.model';
import { AppState } from './models/app-state';
import { Store } from '@ngrx/store';
import * as  appActions from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select(state => state.users);
  }
  title = 'using-ngrx';
  users$: Observable<IUser[]>;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.store.dispatch(new appActions.LoadUsersAction());
  }
}
