import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { OpenerComponent } from './openers/opener.component';
import { OverlayComponent } from './overlay/overlay.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [OpenerComponent, CardComponent, OverlayComponent],
  imports: [RouterModule, DialogModule, ButtonModule],
  exports: [OpenerComponent, RouterModule, CardComponent],
})
export class SharedModule {}
