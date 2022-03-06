let actors = {};
let genres = {};

async function findData(movie) {
  //store movie in genre object with genre name as key movie array as value
  movie["genres"].forEach((genre) => {
    genres[genre] = genres[genre] ? [...genres[genre], movie.title] : [];
  });

  //store movie in actors object with actor name as key and movie array as value
  movie["cast"].forEach((actor) => {
    actors[actor] = actors[actor] ? [...actors[actor], movie.title] : [];
  });
}

async function getSpecificData(data) {
  data.forEach(findData);

  const actorsData = Object.keys(actors).map((actor) => {
    return { Name: actor, Movies: actors[actor] };
  });

  const genresData = Object.keys(genres).map((genre) => {
    return { Name: genre, Movies: genres[genre] };
  });

  return {
    Actors: actorsData,
    Genres: genresData,
  };
}

async function getData() {
  try {
    let res = await fetch(
      `https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json`
    );

    const data = await res.json();
    newData = await getSpecificData(data);
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

getData();
