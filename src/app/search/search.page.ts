import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {searchAction} from '../store/app.actions';
import {Observable} from 'rxjs';
import {AppState} from '../store/app.reducer';
import {Albums} from '../album.interface';

@Component({
  selector: 'app-folder',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchTerm: string;
  albums$: Observable<Albums>;

  constructor(private store: Store<{ app: AppState }>) {}

  ngOnInit() {
    this.albums$ = this.store.select(state => state.app.albums);
  }

  search(searchTerm: string): void {
    this.store.dispatch(searchAction({ query: searchTerm }));
  }
}
