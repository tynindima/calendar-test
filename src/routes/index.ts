import Event from "../pages/Event";
import Exercise from "../pages/Exercise";
import Login from "../pages/Login";

export interface IRoute {
  path: string;
  components: React.ComponentType;
  exact?: boolean;
};

export enum RouteNames {
  LOGIN = 'login',
  EVENT = '/',
  EXERCISE = 'exercise'
};


export const publicRoutes = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes = [
  { path: RouteNames.EVENT, exact: true, component: Event },
  { path: RouteNames.EXERCISE, exact: true, component: Exercise },
];
