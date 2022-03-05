async function flightsInfo() {
  const airportsResponse = await fetch(
    ` https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json`
  );
  const airportsData = await airportsResponse.json();

  airportsData.map((airport) => {
    const answer = airport.Statistics.Flights;
    const sum =
      airport.Statistics.Flights.Cancelled +
      airport.Statistics.Flights.Delayed +
      airport.Statistics.Flights.Diverted +
      airport.Statistics.Flights["On Time"];

    const sumEqualToTotal = sum === airport.Statistics.Flights.Total;

    answer["sumEqualToTotal"] = sumEqualToTotal;

    console.log(answer);
  });
}

flightsInfo();
