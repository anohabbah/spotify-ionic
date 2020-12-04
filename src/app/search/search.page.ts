import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {bookmarkUpdateAction, searchAction} from '../store/app.actions';
import {Observable, Subject} from 'rxjs';
import {AppState} from '../store/app.reducer';
import {Album, Albums, Library} from '../album.interface';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {
  searchTerm: string;
  albums: Albums;
  private unsubscribe = new Subject<void>();
  library: Library = {};

  constructor(private store: Store<{ app: AppState }>) {}

  ngOnInit() {
    this.store.select(state => state.app.albums)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((albums: Albums) => this.albums = albums);

    this.store
        .select(state => state.app.library)
        .pipe(
            takeUntil(this.unsubscribe)
        )
        .subscribe(library => this.library = library);
  }

  search(searchTerm: string): void {
    this.store.dispatch(searchAction({ query: searchTerm }));
  }

  toggle(album: Album): void {
    this.store.dispatch(bookmarkUpdateAction({ payload: album }));
  }

  isBookmarked(albumId: string): boolean {
    return Boolean(this.library[albumId]);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
