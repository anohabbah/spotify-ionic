import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import {Observable, Subject} from 'rxjs';
import {Albums} from '../album.interface';
import {map} from 'rxjs/operators';
import values from 'lodash/values';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  items$: Observable<Albums>;

  constructor(private store: Store<{ app: AppState}>) {}

  ngOnInit() {
    this.items$ = this.store
        .select(state => state.app.library)
        .pipe(map(obj => values(obj)));
  }

}
