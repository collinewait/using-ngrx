import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { IUser } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  title = 'using-ngrx';
  users$: Observable<IUser[]>;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users$ = this.appService.getUsers();
  }
}
