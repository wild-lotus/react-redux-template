# SIM Frontend template

## Architecture

Based on a React + Redux architecture with this specificities:

- Bootstrapped with an ejected [Create React App](https://github.com/facebookincubator/create-react-app) (CRA). See [CRA-README.md](./CRA-README.md) for more info.
- Using [Redux](http://redux.js.org/) for state management.
  - Using [redux-thunk](https://github.com/gaearon/redux-thunk) for async actions.
  - Using [reselect](https://github.com/reactjs/reselect) and [re-reselect](https://github.com/toomuchdesign/re-reselect) in order to compute derived data.
- Using [styled-components](https://www.styled-components.com) for CSS styling.
- Using [Flow](https://flow.org/) as static type checker, with [flow-typed](https://github.com/flowtype/flow-typed) (requires global dependency) for third-party library interface definitions.

## Testing

- Using [Jest](http://facebook.github.io/jest/) as of CRA.
- Using [enzyme](http://airbnb.io/enzyme/) for shallow rendering.
- Using [Sinon](http://sinonjs.org/) in order to create test spies, stubs and mocks.

## Other

- Using [prettier](https://github.com/prettier/prettier) for code formatting. Using [precise-commits](https://github.com/nrwl/precise-commits) with [husky](https://github.com/typicode/husky) for prettier code formatting on a precommit hook.
- Using [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) with [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) for HTTP requests.
- Using [AJV](http://epoberezkin.github.io/ajv/) for JSON schema validation.

## Next steps

- Adding required shims to be compatible with Internet Explorer.
- Adding sample code for JSON schema validation.
