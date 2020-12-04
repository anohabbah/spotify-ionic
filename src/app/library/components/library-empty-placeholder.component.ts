import {Component} from '@angular/core';

@Component({
    selector: 'app-library-empty-placeholder',
    template: `
      <ion-card>
        <ion-card-content class="ion-text-center ion-padding-vertical">
          <ion-icon name="folder-open-outline" size="large"></ion-icon>
          <p class="ion-padding-vertical ion-no-margin">
            Votre bibliothèque est vide pour le moment.
          </p>
          <ion-button href="/" router-direction="root">Ajouter un album</ion-button>
        </ion-card-content>
      </ion-card>
    `,
})
export class LibraryEmptyPlaceholderComponent {}
