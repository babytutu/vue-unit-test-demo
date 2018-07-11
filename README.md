# vue-unit-test-demo

- Example project using mocha-webpack@2 && mocha
- based on webpack@4

## Additional Dependencies

- mocha & mocha-webpack
- jsdom & jsdom-global (for setting up DOM environment in tests)
- webpack-node-externals (for excluding NPM deps from test bundle)
- expect (for assertions)
- nyc & istanbul-instrumenter-loader (for coverage)
- canvas-prebuilt (for support canvas in tests)

## Usage

- Install

```bash
npm i
```

- Run Unit Test

```bash
npm run test
```

- Run Unit Test With Coverage

```bash
npm run cover
```

- Unit Test Coverage Reporter

> open coverage/index.html

## Directory

- Demo code from [Vue Unit Testing](https://vuejs.org/v2/guide/unit-testing.html)

```
├── src                  // resource
│   └── components       // components
├── test                 // test
├── .babelrc             // babel
├── .gitignore           // git
├── package-lock.json    // npm
├── package.json         // npm
├── README.md            // readme
└── webpack.test.js      // webpack
```
