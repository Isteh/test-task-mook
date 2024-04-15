import { RouteProps } from "react-router";
import { APP_ROUTES, ROUTE_PATH } from "./routes";
import Main from "../pages/Main/Main";
import Upload from "../pages/Upload/Upload";
import Result from "../pages/Result/Result";

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
    [APP_ROUTES.MAIN]: { path: ROUTE_PATH[APP_ROUTES.MAIN], element: <Main /> },
    [APP_ROUTES.UPLOAD]: { path: ROUTE_PATH[APP_ROUTES.UPLOAD], element: <Upload /> },
    [APP_ROUTES.RESULT]: { path: ROUTE_PATH[APP_ROUTES.RESULT], element: <Result /> },
};