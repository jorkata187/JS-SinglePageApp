import { page } from './lib.js';

import { updateNav } from './util.js';

import { catalogView } from './veiws/catalog.js';
import { createView } from './veiws/create.js';
import { detailsView } from './veiws/details.js';
import { editView } from './veiws/edit.js';
import { homeView } from './veiws/home.js';
import { loginView } from './veiws/login.js';
import { logoutView } from './veiws/logout.js';
import { registerView } from './veiws/register.js';
import { searchView } from './veiws/search.js';

updateNav();

page('/', homeView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/search', searchView);

page.start();