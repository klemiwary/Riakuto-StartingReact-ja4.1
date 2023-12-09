class DoubleError extends Error {
  static {
    this.prototype.name = "DoubleError";
  }
}
class TripleError extends Error {
  static {
    this.prototype.name = "TripleError";
  }
}
class QuintupleError extends Error {
  static {
    this.prototype.name = "QuintupleError";
  }
}
class SomeError extends Error {}

try {
  const num = Math.floor(Math.random() * 100);
  console.log(num);

  if (num % 2 === 0) {
    throw new DoubleError();
  } else if (num % 3 === 0) {
    throw new TripleError();
  } else if (num % 5 === 0) {
    throw new QuintupleError();
  } else {
    throw new SomeError();
  }
} catch (e) {
  if (e instanceof DoubleError) {
    console.error(`${e.name}: divisible by 2`);
  } else if (e instanceof TripleError) {
    console.error(`${e.name}: divisible by 3`);
  } else if (e instanceof QuintupleError) {
    console.error(`${e.name}: divisible by 5`);
  } else {
    throw new Error("unexpected error", { cause: e });
  }
}
