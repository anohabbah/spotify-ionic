import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Album} from '../../album.interface';

@Component({
    selector: 'app-library-item',
    template: `
      <ion-card>
        <img [src]="item.images[0].url" alt="" class="w-100"/>

        <ion-card-header>
          <ion-card-subtitle>{{ item.artists[0].name }}</ion-card-subtitle>
          <ion-card-title>{{ item.name }}</ion-card-title>
        </ion-card-header>

        <ion-item class="ion-activated">
          <ion-icon name="musical-notes-outline" slot="start"></ion-icon>
          <ion-label>{{ item.total_tracks }} morceaux</ion-label>
        </ion-item>

        <ion-item>
          <ion-icon name="calendar-outline" slot="start"></ion-icon>
          <ion-label>{{ item.release_date }} - date de sortie</ion-label>
          <ion-button fill="clear" slot="end" (click)="toggle(item)" color="primary">
            <ion-icon *ngIf="!isFavored" slot="icon-only" name="heart-outline"></ion-icon>
            <ion-icon *ngIf="isFavored" slot="icon-only" name="heart"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-card>
    `,
})
export class LibraryItemComponent {
    @Input() item: Album;
    @Input() isFavored: boolean;
    @Output() toggled = new EventEmitter<Album>();

    toggle(item: Album) {
        this.toggled.emit(item);
    }
}
