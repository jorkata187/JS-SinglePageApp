import { html, page, render } from "../lib.js";

import { deleteShow, getShowById } from "../data/shows.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <div id="details-text">
              <p id="details-title">${data.title}</p>
              <div id="info-wrapper">
                <div id="description">
                  <p id="details-description">
                    ${data.details}
                  </p>
                </div>
              </div>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
                ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
              </div>
            </div>
          </div>
        </section>`;

export async function detailsView(ctx) {
    const id = ctx.params.id;

    const data = await getShowById(id);

    const userData = getUserData();

    const isOwner = userData?._id == data._ownerId;

    render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (!choice) {
            return;
        }

        await deleteShow(id);

        page.redirect('/catalog');
    }
}