import {RedirectToLoginIfNotAuthenticated} from "../components/redirects/RedirectToLoginIfNotAuthenticated";
import {AppRoute} from "./AppRoute";
import Cookies from 'js-cookie';
import Config from "../Config";
import axios from "axios";

export class ProtectedAppRoute extends AppRoute {
    constructor(
        path,
        element
    ) {
        super(path, <RedirectToLoginIfNotAuthenticated>{element}</RedirectToLoginIfNotAuthenticated>);
    }
}