import { connect } from 'react-redux'

import discord from 'discord.js'

import Page from "../components/page"

discord.OAuth2Application()

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