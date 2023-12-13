type T1 = NonNullable<string | number | undefined>;
type T2 = NonNullable<number[] | null | undefined>;

const text: T1 = undefined;
const figure: T2 = null;
