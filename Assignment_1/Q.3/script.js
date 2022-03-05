async function nobePrizeInfo() {
  const response = await fetch("http://api.nobelprize.org/v1/prize.json");
  const data = await response.json();

  const answer = data.prizes.filter((prize) => {
    return (
      prize.year >= 2000 && prize.year <= 2019 && prize.category == "chemistry"
    );
  });

  console.log(answer);
}

nobePrizeInfo();
