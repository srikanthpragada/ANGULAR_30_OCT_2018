import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { RouteDemoModule } from './app/routedemo.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RouteDemoModule)
  .catch(err => console.error(err));
