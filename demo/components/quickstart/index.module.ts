import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HighlightDirective } from '../../directives/highlight'

import { QuickstartRouteModule } from './route.module'

import { ImportComponent } from './import.component'
import { QuickstartComponent } from './index.component'
import { InstallComponent } from './install.component'
import { UsageComponent } from './usage.component'

@NgModule({
  declarations: [
    QuickstartComponent,
    InstallComponent,
    ImportComponent,
    UsageComponent,
    HighlightDirective
  ],
  exports: [RouterModule],
  imports: [CommonModule, QuickstartRouteModule]
})
export class QuickstartModule {}
