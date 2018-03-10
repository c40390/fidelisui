import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertDataService } from './alert-data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [AppComponent, KeysPipe],
  imports: [BrowserModule, FormsModule, HttpModule, Ng2SearchPipeModule],
  providers: [AlertDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
