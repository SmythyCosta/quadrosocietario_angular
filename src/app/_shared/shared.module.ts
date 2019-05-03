import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidacaoMessageComponent } from './validacao-message/validacao-message.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ValidacaoMessageComponent
    ],
    exports: [
        ValidacaoMessageComponent
    ]
})
export class SharedModule { }