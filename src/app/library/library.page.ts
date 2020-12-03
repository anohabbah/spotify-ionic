import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducer';
import {Observable, Subject} from 'rxjs';
import {Album, Albums, Library} from '../album.interface';
import {map, takeUntil} from 'rxjs/operators';
import values from 'lodash/values';
import {favoritesUpdateAction} from '../store/app.actions';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  private unsubscribe = new Subject<void>();
  items$: Observable<Albums>;
  favorites: Library = {};

  constructor(private store: Store<{ app: AppState}>) {}

  ngOnInit() {
    this.items$ = this.store
        .select(state => state.app.library)
        .pipe(map(obj => values(obj)));

    this.store
        .select(state => state.app.favorites)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(favorites => this.favorites = favorites);
  }

  toggleFavorite(album: Album): void {
    this.store.dispatch(favoritesUpdateAction({ payload: album }));
  }

  isFavored(albumId: string): boolean {
    return Boolean(this.favorites[albumId]);
  }
}
