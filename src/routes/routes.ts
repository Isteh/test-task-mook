export enum APP_ROUTES {
  MAIN = 'home',
  UPLOAD = 'upload',
  RESULT = 'result',
}

export const ROUTE_PATH: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.UPLOAD]: '/upload',
  [APP_ROUTES.RESULT]: '/result',
};
