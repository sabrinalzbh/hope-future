import * as React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, header } from './layout.module.css'
import logo from '../images/black-logo.png'
import Footer from './footer'



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
            <header className={header}>
                <img src={logo} className="site-logo" alt="logo" height="40px"/>
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
            <Footer></Footer>
        </div>
    )
    
}
 


export default Layout