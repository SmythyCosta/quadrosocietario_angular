import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-navegation',
  templateUrl: './bar-navegation.component.html',
  styleUrls: ['./bar-navegation.component.css']
})
export class BarNavegationComponent {

  @Input() navegationBar:any = {
    entity: '',
    navegationTitle: ''
  };

}
