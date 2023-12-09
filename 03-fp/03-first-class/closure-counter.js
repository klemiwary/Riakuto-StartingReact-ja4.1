function counter() {
  let count = 0;

  function increment() {
    return (count += 1);
  }

  return increment;
}
