import { logout } from "../data/user.js";
import { page } from "../lib.js";
import { updateNav } from "../util.js";


export function logoutView() {
    logout();
    updateNav();
    // TODO Redirect to the requirment view
    page.redirect('/');
}