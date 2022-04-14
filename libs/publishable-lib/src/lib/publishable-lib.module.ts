import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class PublishableLibModule {
  onClick() {
    console.log('click a button');
  }
}
