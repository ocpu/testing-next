import { connect } from 'react-redux'

import Page from "../components/page"

export default Page(connect(
  state => ({ // state -> props
    
  }),
  dispatch => ({ // dispatch -> props

  })
)(({/* props */  }) => (
  <main className="container">
    <h1>About</h1>
    <p>This is a site about stuff that only the developer will see for the rest of this apps life time</p>
  </main>
)))