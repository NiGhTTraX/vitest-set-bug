import { describe } from "vitest";
import { expect, test } from "vitest";

describe('set with asymmetric matchers', () => {
  test.fails('matching more than 1 value', () => {
    expect(new Set([
      'foo',
      'foobar'
    ])).toEqual(new Set([
      expect.stringContaining('foo'),
      expect.stringContaining('xxx')
    ]))
  })

  test.fails('matching a single value', () => {
    expect(new Set([
      'foo',
      'bar'
    ])).toEqual(new Set([
      expect.stringContaining('foo'),
      expect.stringContaining('xxx')
    ]))
  })
})
