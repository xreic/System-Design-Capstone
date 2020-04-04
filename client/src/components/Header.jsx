import React from 'react';
import newReleases from '../../dist/assets/newReleases.png';
import men from '../../dist/assets/men.png';
import women from '../../dist/assets/women.png';
import kids from '../../dist/assets/kids.png';
import customize from '../../dist/assets/customize.png';
import logo from '../../dist/assets/logo.png';
import converse from '../../dist/assets/converse.png';
import jordan from '../../dist/assets/jordan.png';
import hurley from '../../dist/assets/hurley.png';
import cart from '../../dist/assets/cart.png';
import pin from '../../dist/assets/pin.png';
import LogInModal from './LogInModal.jsx';
import Overlay from './Overlay.jsx';
import Help from './Help.jsx';
import Locations from './Location.jsx';
import NewReleases from './NewReleases';
import Mens from './Mens.jsx';
import Womens from './Womens.jsx';
import Kids from './Kids.jsx';
import Customize from './Customize.jsx';
import Search from './Search.jsx';
import SearchModal from './SearchModal.jsx';
import Footer from './Footer.jsx';
import Feedback from './Feedback.jsx';
import ReactDOM from 'react-dom';


export default function Header(props){

return(
    <div id='header-container'>
                <div className='nav-container'>
                    <div className='brand-container'>
                        <div className='brand-item join-us'>Join Us</div>
                        <div className='brand-item jordan'><img height="15px" className='logo-imgs' id='jordan-logo' src={jordan}></img></div>
                        <div className='brand-item hurley'><img height="10px" className='logo-imgs' src={hurley}></img></div>
                        <div className='brand-item converse'><img height="10px" className='logo-imgs' src={converse}></img></div>
                        <div className='brand-item empty'></div>
                        <div className='brand-item join' onClick={() => props.handleChange('join')}>Join/Log In To Nike Member Profile</div>
                        <ul className='help-list' onMouseEnter={() => props.handleChange('help')} onMouseLeave={() => props.handleChange('')}>
                            <div className='brand-item help'>Help
                                <Help display={props.display} />
                            </div>
                        </ul>
                        <div className='brand-item cart'><img height="15px" className='logo-imgs' src={cart}></img></div>
                        <div className='brand-item country' onClick={() => props.handleChange('locations')}><img height="15px" className='logo-imgs' src={pin}></img> United States</div>
                    </div>

                    <div className='site-nav-container'>
                        <div className='logo'><img id='logo' src={logo}></img></div>
                        <div className='empty-site-nav'></div>
                        <div className='site-nav-item logo' onMouseEnter={() => props.handleChange('new')} onMouseLeave={() => props.handleChange('')}><img className ='s-n-img' src={newReleases}></img>
                            <NewReleases display={props.display} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => props.handleChange('men')} onMouseLeave={() => props.handleChange('')}><img className ='s-n-img' src={men}></img>
                            <Mens display={props.display} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => props.handleChange('women')} onMouseLeave={() => props.handleChange('')}><img className ='s-n-img' src={women}></img>
                            <Womens display={props.display} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => props.handleChange('kids')} onMouseLeave={() => props.handleChange('')}><img className ='s-n-img' src={kids}></img>
                            <Kids display={props.display} />
                        </div>
                        <div className='site-nav-item logo' onMouseEnter={() => props.handleChange('customize')} onMouseLeave={() => props.handleChange('')}><img className ='s-n-img' src={customize}></img>
                            <Customize display={props.display} />
                        </div>
                        <div className ='empty-site-nav'></div>
                        <div className='search-wrapper'>
                            <Search display={props.display} handleChange={props.handleChange} setKeyword={props.setKeyword}/>
                            <SearchModal keyword={props.keyword} display={props.display} handleChange={props.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className='announcement-banner'>
                    <div className='statement'>Nike statement on COVID-19.</div>
                    <u>VIEW HERE</u>
                </div>
                </div>
    )
}

