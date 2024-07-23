import {RedirectToLogin} from "../components/redirects/RedirectToLogin";
import {AppRoute} from "./AppRoute";

export class ProtectedAppRoute extends AppRoute {
    constructor(
        path,
        element
    ) {
        super(path, <RedirectToLogin>{element}</RedirectToLogin>);
    }
}