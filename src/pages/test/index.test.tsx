import { mock } from "bun:test";

const random = mock((multiplier: number) => multiplier * Math.random());

random(2);
random(10);

random.mock.calls;

import { test, expect } from "bun:test";

test("snapshot", () => {
  expect({ foo: "bar" }).toMatchSnapshot();
});
