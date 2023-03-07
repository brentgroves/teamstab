import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamstabTab/index.html")
@PreventIframe("/teamstabTab/personal.html")
export class TeamstabTab {
}
