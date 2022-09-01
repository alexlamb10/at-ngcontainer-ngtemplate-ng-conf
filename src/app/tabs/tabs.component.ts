import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  index = 0;

  @ContentChild(TabDirective, { read: TemplateRef })
  template: TemplateRef<any>;
}
