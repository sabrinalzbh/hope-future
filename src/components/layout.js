import * as React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, myName, quote, intro } from './layout.module.css'
import logo from '../images/black-logo.png'

const Layout = ({ pageTitle, pageHeading, children}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title

            }
        }
    }
    `)

    return (
        <div className={ container }>
            <title> {pageTitle} | {data.site.siteMetadata.title}</title>
            <header>
                <img src={logo} className="site-logo" alt="logo" height="50px"/>
            <nav>
                <ul className= {navLinks}>
                    <li className= {navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className= {navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className= {navLinkItem}><Link to="/projects" className={navLinkText}>Projects</Link></li>
                    <li className= {navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                    <li className= {navLinkItem}><Link to ="/contact" className={navLinkText}>Contact</Link></li>
                </ul>
            </nav>
            </header>
          <main>
                <h1 className={heading}> </h1>
                {children}
            </main>
        </div>
    )
}

export default Layout