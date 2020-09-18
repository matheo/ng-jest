import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { defineGlobalsInjections } from '@ngneat/spectator';

defineGlobalsInjections({
  imports: [
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '',
    },
  ],
});
