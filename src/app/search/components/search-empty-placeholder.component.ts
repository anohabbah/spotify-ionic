import {Component} from '@angular/core';

@Component({
    selector: 'app-search-empty-placeholder',
    template: `
      <ion-row>
        <ion-col class="ion-padding ion-text-center">
          <ion-icon name="musical-notes-outline" size="large"></ion-icon>
          <p class="ion-padding-top">Commencer votre recherche, le résultat s'affichera ici.</p>
        </ion-col>
      </ion-row>
    `
})
export class SearchEmptyPlaceholderComponent {
}
