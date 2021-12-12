import { AuthActionCreators } from "./auth/actions";
import { EventActionCreators } from "./event/actions";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
};