Testing practice readme · MD

# Testing Practice

A set of small JavaScript functions built **test-first** with [Jest](https://jestjs.io/), from The Odin Project's Testing Practice exercise. The focus isn't the functions themselves — it's practicing the **red → green → refactor** TDD cycle and writing clear, focused unit tests.

## What it demonstrates

- **Test-Driven Development** — writing a failing test first, then the minimal code to pass it, then refactoring
- **Jest** — `test`/`expect` and a range of matchers (`toBe`, `toEqual`, `toThrow`, …)
- **ES6 modules in Jest** — configured with Babel (`@babel/preset-env`)
- Separating source (`Functions/`) from tests (`Tests/`)

## Functions

- **capitalize** — returns a string with its first character capitalized
- **reverseString** — returns a reversed string
- **calculator** — object with `add`, `subtract`, `multiply`, `divide`
- **caesarCipher** — shifts letters by a given amount, preserving case and punctuation and wrapping past `z`
- **analyzeArray** — takes an array of numbers and returns an object with `average`, `min`, `max`, and `length`

Each function has a matching test file in `Tests/`.

## Built with

- JavaScript (ES6 modules)
- Jest
- Babel (`@babel/preset-env`) so Jest can use `import`/`export`

## Running the tests

```bash
git clone https://github.com/dani-sink/project-testing-practice.git
cd project-testing-practice
npm install
npm test          # run the full suite once
```

<!-- If you added a watch script, keep this; otherwise delete it -->

```bash
npm run watch     # re-run tests on every save
```

## What I learned

- Building each function test-first (red → green → refactor) changed how I work — I drove the code with failing tests instead of writing it all and hoping.
- The refactor step was where it paid off: cleaning up the code repeatedly surfaced hidden bugs I'd otherwise have missed.
- Because the green test suite was already in place, I could fix those bugs with confidence instead of worrying I'd break something that already worked.
- `caesarCipher` was the clearest example — its wrap-around, case preservation, and leaving punctuation untouched were edge cases the tests pushed me to handle one at a time.
