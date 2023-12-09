// 手続き型プログラミング
{
  const octuples = [];

  for (let n = 1; n < 101; n += 1) {
    if (n % 8 === 0) {
      octuples.push(n);
    }
  }

  console.log(octuples);
}

// 関数型プログラミング
{
  const range = (start, end) => [...new Array(end - start).keys()].map((n) => n + start);
  const octuples = range(1, 101).filter((n) => n % 8 === 0);
  console.log(octuples);
}
