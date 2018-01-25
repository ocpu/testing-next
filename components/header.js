import Head from 'next/head'
import Link from 'next/link'
import NavLink from './link'

const routes = [
  ['/', 'Home'],
  ['/about', 'About'],
]

export default class Header extends React.Component {

  hideNav(e) {
    console.log(e)
  }

  render() {
    return (
      <div>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>My page title</title>
          <style>{`@import url(https://fonts.googleapis.com/css?family=Roboto:300,400);*{box-sizing:border-box;margin:0;padding:0;font-family:'Roboto',Helvetica,Arial,sans-serif}`}</style>
          <link rel="stylesheet" href="/static/css/styles.css"/>
        </Head>
        <nav id="top-nav">
          <button className="mobile-btn" onClick={()=>{}} style={{display:'none'}} tabIndex="-1">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <Link href="/"><span className="nav-text">My application</span></Link>
          <ul>
            {routes.map(([path, text], i) =>
              <li key={i}><NavLink href={path}>{text}</NavLink></li>
            )}
          </ul>
        </nav>
        <aside className="nav-pane show" onClick={this.hideNav}>
          <nav id="pane">
            <button className="hide-btn" onClick={()=>console.log('hello')}>&times;</button>
            <header>
              {/* <img src="whatever.jpg" alt="some image" onError={(e)=>e.target.styles.display='none'}/> */}
            </header>
            <ul>
              {routes.map(([path, text], i) =>
                <li key={i}><NavLink href={path}>{text}</NavLink></li>
              )}
            </ul>
          </nav>
        </aside>
      </div>
    )
  }
}