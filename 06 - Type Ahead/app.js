const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchForm = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const places = [];

try {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => places.push(...data));
} catch (error) {
  console.log(console.log(error));
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    const re = new RegExp(wordToMatch, "gi");
    return place.city.match(re) || place.state.match(re);
  });
};

const displayMatches = (e) => {
  const matches = findMatches(e.target.value, places);
  const re = new RegExp(e.target.value, "gi");
  const html = matches
    .map((place) => {
      const cityName = place.city.replace(
        re,
        `<span class="hl">${e.target.value}</span>`
      );
      const stateName = place.state.replace(
        re,
        `<span class="hl">${e.target.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
};

searchForm.addEventListener("keyup", displayMatches);
