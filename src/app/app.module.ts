import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabDirective } from './tabs/tab.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TabsComponent, TabDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
