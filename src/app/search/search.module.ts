import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import {FormatNamePipe} from '../format-name.pipe';
import {SearchResultItemComponent} from './components/search-result-item/search-result-item.component';
import {SearchEmptyPlaceholderComponent} from './components/search-empty-placeholder.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  exports: [
    FormatNamePipe
  ],
  declarations: [SearchPage, FormatNamePipe, SearchResultItemComponent, SearchEmptyPlaceholderComponent]
})
export class SearchPageModule {}
