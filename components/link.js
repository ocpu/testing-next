import NextLink from 'next/link'

export default class NavLink extends React.Component {
  render() {
    const { href, style, children } = this.props
    return (
      <NextLink href={href || ''}><a style={style || {}}>{children}</a></NextLink>
    )
  }
}
