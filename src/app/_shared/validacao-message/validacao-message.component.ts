import { Component, Input  } from '@angular/core';

@Component({
  selector: 'validacao-message',
  templateUrl: './validacao-message.component.html',
})
export class ValidacaoMessageComponent {

  @Input() text = '';

}
