import variables from './apiVariables';
import galleryTemplate from '../../templates/galleryCardTemplate';
const { BASE_URL, API_KEY } = variables;
const galleryRef = document.querySelector('.gallery') 
console.log(galleryRef);
console.log('priv');
const api = {
  fetchPopularFilms(page = '') {
    const url = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&page=${page}`;
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .catch(() => console.error('no popular'));
  },
  fetchFilmByQuery(page = '', searchQuery = '') {
    const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();
      })
      .catch(() => console.error('film is nod find!'));
  },
};

function renderCard(fetchPopularFilms) {
  const markup = galleryTemplate (fetchPopularFilms);
  blockForMarkupRef.insertAdjacentHTML('beforeend', markup);
}
console.log(renderCard)
export default api;
