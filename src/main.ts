```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

// Enable production mode when environment is production
if (environment.production) {
  enableProdMode();
}

// Bootstrap the Angular application with enhanced error handling
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error('Error starting app:', err));
```