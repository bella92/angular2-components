import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { TreeRoutes } from './+tree/index';
import { DragAndDropShowRoutes } from './+drag_and_drop_show/index';

const routes: RouterConfig = [
  ...AboutRoutes,
  ...TreeRoutes,
  ...DragAndDropShowRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
