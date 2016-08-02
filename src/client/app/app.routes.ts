import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { TreeRoutes } from './+tree/index';
import { DragAndDropRoutes } from './+drag_and_drop/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...TreeRoutes,
  ...DragAndDropRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
