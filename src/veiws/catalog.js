import { getAllShows } from "../data/shows.js";
import { html, render } from "../lib.js";
import { showTemplate } from "./partials/show.js";

const catalogTemplate = (shows) => html`
<h2>Users Recommendations</h2>
        <section id="shows">
          <!-- Display a div with information about every post (if any)-->
          ${shows.length ? shows.map(showTemplate) : html`<h2 id="no-show">No shows Added.</h2>`}
        </section>`;

export async function catalogView() {
    const shows = await getAllShows();
    
    render(catalogTemplate(shows));
}