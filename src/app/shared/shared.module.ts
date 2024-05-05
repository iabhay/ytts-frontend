import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [CardComponent],
  imports: [RouterModule, DialogModule, ButtonModule,TableModule],
  exports: [CardComponent],
})
export class SharedModule {}
