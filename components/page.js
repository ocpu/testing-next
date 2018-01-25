import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import Header from './header'

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer, {
  color: 'red'
})

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept(() => {
    const nextRootReducer = reducer
    store.replaceReducer(nextRootReducer);
  });
}

export default Page => class PageWrapper extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Provider store={store}>
          <Page/>
        </Provider>
      </div>
    )
  }
}