import {ProtectedAppRoute} from "./ProtectedAppRoute";

export class MenuRoute extends ProtectedAppRoute {
    constructor(
        path,
        element,
        icon,
        name
    ) {
        super(path, element);
        this.icon = icon
        this.name = name
    }
}