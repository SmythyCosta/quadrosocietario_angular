import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacaoMessageComponent } from './validacao-message/validacao-message.component';
import { BarNavegationComponent } from './bar-navegation/bar-navegation.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ValidacaoMessageComponent,
        BarNavegationComponent
    ],
    exports: [
        ValidacaoMessageComponent
    ]
})
export class SharedModule { }