const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh/';

function showData({ data }) {
  result.innerHTML = `
    <ul class="songs">
      ${data
        .map(
          song => `<li>
      <span><strong>${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
        )
        .join('')}
    </ul>
  `;
}

async function searchSongs(searchTerm) {
  console.log(searchTerm);

  const res = await fetch(apiURL + 'suggest/' + searchTerm);
  const data = await res.json();
  showData(data);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();
  
  if (!searchTerm) alert('Enter song or artist name');
  else {
    searchSongs(searchTerm)
  }

});