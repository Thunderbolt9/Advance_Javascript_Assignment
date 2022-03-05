fetch(
  "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    console.log("....Wait for the output as too much data is there....:");
    actors = [];
    genres = [];
    temp = {};
    output = {};
    for (i = 0; i < dataset.length; i++) {
      for (j = 0; j < dataset[i].cast.length; j++) {
        temp["Actor"] = dataset[i].cast[j];
        temp["Movies"] = dataset[i].title;
        actors.push(Object.assign({}, temp));
      }
      for (j = 0; j < dataset[i].genres.length; j++) {
        temp["Type"] = dataset[i].genres[j];
        temp["Movies"] = dataset[i].title;
        genres.push(Object.assign({}, temp));
      }
    }

    var output1 = actors.reduce(function (ori, curr) {
      var occurs = ori.reduce(function (n, item, i) {
        return item.Actor === curr.Actor ? i : n;
      }, -1);
      if (occurs >= 0) {
        ori[occurs].Movies = ori[occurs].Movies.concat(curr.Movies);
      } else {
        var ob = {
          Actor: curr.Actor,
          Movies: [curr.Movies],
        };
        ori = ori.concat([ob]);
      }

      return ori;
    }, []);

    var output2 = genres.reduce(function (ori, curr) {
      var occurs = ori.reduce(function (n, item, i) {
        return item.Type === curr.Type ? i : n;
      }, -1);
      if (occurs >= 0) {
        ori[occurs].Movies = ori[occurs].Movies.concat(curr.Movies);
      } else {
        var ob = {
          Type: curr.Type,
          Movies: [curr.Movies],
        };
        ori = ori.concat([ob]);
      }
      return ori;
    }, []);

    output["Actors"] = output1;
    output["Genres"] = output2;
    console.log(output);
  })
  .catch(function (error) {
    console.log(error);
  });
