import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';
import {LibraryEmptyPlaceholderComponent} from './components/library-empty-placeholder.component';
import {LibraryItemComponent} from './components/library-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule
  ],
  declarations: [LibraryPage, LibraryEmptyPlaceholderComponent, LibraryItemComponent]
})
export class LibraryPageModule {}
