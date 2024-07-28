import {RedirectToLoginOrPersonal} from "../components/redirects/RedirectToLoginOrPersonal";
import {AppRoute} from "./AppRoute";

export class ProtectedAppRoute extends AppRoute {
    constructor(
        path,
        element
    ) {
        super(path, <RedirectToLoginOrPersonal>{element}</RedirectToLoginOrPersonal>);
    }
}