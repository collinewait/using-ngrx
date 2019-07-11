import { AppService } from '../app.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as appActions from './../actions/app.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class  UserEffects {

  constructor(
    private appService: AppService,
    private actions$: Actions
  ) { }

  @Effect() loadUsers$ = this.actions$
    .pipe(
      ofType(appActions.LOAD_USERS),
      switchMap(() => this.appService.getUsers()),
      map(users => new appActions.LoadUsersSuccessAction(users))
    );
}
