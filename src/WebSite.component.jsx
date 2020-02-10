import React from 'react'
import './WebSite.styles.scss'

import {Switch , Route} from 'react-router-dom';
// import {Transition , CSSTransition} from 'react-transition-group';

import NavBar from './components/nav-bar/nav-bar.componet';
import HomePage from './pages/home-page/home-page.component';
import AboutPage from './pages/about-page/about.component';
import PortfolioPage from './pages/portfolio-page/portfolio.component';
import ContactPage from './pages/contact-page/contact-page.component';

class WebSite extends React.Component {
  constructor(){
    super()

    this.state={
      navBarHeight: null,
      windowTotalHeight: null
    }
  }



  componentDidMount(){
    this.setState({
      navBarHeight: document.getElementById('navHeighAnchor').offsetHeight,
      windowTotalHeight: window.innerHeight
    })

    window.addEventListener('resize',e=>{
      this.setState({
        navBarHeight: document.getElementById('navHeighAnchor').offsetHeight,
        windowTotalHeight: window.innerHeight
      })
    })

  }

  webPageHeightAdjuster = () => {
    const {navBarHeight,windowTotalHeight} = this.state;
    const routeContainerHeight = windowTotalHeight - navBarHeight;
    return routeContainerHeight
  }

  render(){
    return (
      <div className="website">
        <NavBar />
        <div id="route-container" style={{height: `${this.webPageHeightAdjuster()}px` }}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/portfolio' component={PortfolioPage} />
            <Route path='/contact' component={ContactPage} />
          </Switch>
        </div>
      </div>
    )
  }
}


export default WebSite;