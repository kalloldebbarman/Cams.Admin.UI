import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements as elsaCustomElements } from '@elsa-workflows/elsa-workflows-studio/loader';
elsaCustomElements();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
