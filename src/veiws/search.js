import { searchShow } from "../data/shows.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const searchTemplate = (onSearch, result) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form @submit=${onSearch} class="search-form">
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
${renderResult(result)}
</section>`;

export function searchView() {
    render(searchTemplate(createSubmitHandler(onSearch)));
}

async function onSearch({search}) {
    if(!search) {
        return alert('Empty field');
    }
    
    const result = await searchShow(search);
    
    render(searchTemplate(createSubmitHandler(onSearch), result));

}

function renderResult(result) {
  if (!result) {
    return ''
  } else if(result.length === 0) {
    return html`<div class="search-result">
    <p class="no-result">There is no TV show with this title</p>
    </div>`
  } 
  return result.map(movie => {
    return html`
   <div class="show">
    <img src=${movie.imageUrl} alt="example1" />
    <div class="show">
      <h3 class="title">${movie.title}</h3>
      <p class="genre">Genre: ${movie.genre}</p>
      <p class="country-of-origin">Country of Origin: ${movie.country}</p>
      <a class="details-btn" href="/details/${movie._id}">Details</a>
    </div>
  </div>`})
}