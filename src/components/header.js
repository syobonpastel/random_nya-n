import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Pets } from '@material-ui/icons';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#16160e`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Pets fontSize="inherit" />
          &nbsp;
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
