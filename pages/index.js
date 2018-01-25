import { connect } from 'react-redux'

import Page from "../components/page"

export default Page(connect(
  state => ({ // state -> props
    color: state.color
  }),
  dispatch => ({ // dispatch -> props

  })
)(({/* props */ color }) => (
  <main className="container">
    <h1>Home</h1>
    <p>I am not a robot!</p>
  </main>
)))