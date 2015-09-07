import test from "tape"
import tavern from "../"

test("tavern", (t) => {
  t.plan(1)
  t.equal(true, tavern(), "return true")
})
