import React from 'react';
import ReactDOM from 'react-dom';
import facebook from '../../dist/assets/facebooklogo.png';
import youtube from '../../dist/assets/youtube.png';
import twitter from '../../dist/assets/twitter.png';
import instagram from '../../dist/assets/instagram.png'
import copyright from '../../dist/assets/copyright.png'
import pin from '../../dist/assets/pin_black.png';
import Location from './Location.jsx';
import GuideModal from './GuideModal.jsx';


export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: ''
        }
    }

    handleChange(option){
        this.setState({
            modal: option
        })
    }

    render(){        
        return(
            <div className='footer-wrapper'>
                <Location display={this.state.modal} />
                <div id='footer-accordian'>
                    <div className='footer-text'>
                        <div className='footer-column'>
                            <ul className='footer-text-list'>
                                <li className='footer-header'>GIFT CARDS</li>
                                <li className='footer-header'>PROMOTIONS</li>
                                <li className='footer-header'>FIND A STORE</li>
                                <li className='footer-header'>SIGN UP FOR EMAIL</li>
                                <li className='footer-header'>BECOME A MEMBER</li>
                                <li className='footer-header' onClick={() => this.props.handleChange('feedback')}>SITE FEEDBACK</li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <ul className='footer-text-list'>
                                <li className='footer-header'>GET HELP</li>
                                <li className='footer-body'>Order Status</li>
                                <li className='footer-body'>Shipping and Delivery</li>
                                <li className='footer-body'>Returns</li>
                                <li className='footer-body'>Payment Options</li>
                                <li className='footer-body'>Gift Card Balance</li>
                                <li className='footer-body'>Contact Us</li>
                            </ul>
                        </div>
                        <div className='footer-column'>
                            <ul className='footer-text-list'>
                                <li className='footer-header'>ABOUT NIKE</li>
                                <li className='footer-body'>News</li>
                                <li className='footer-body'>Careers</li>
                                <li className='footer-body'>Investors</li>
                                <li className='footer-body'>Purpose</li>
                                <li className='footer-body'>Sustainability</li>
                                <li className='footer-body'>CA Supply Chains Act</li>
                            </ul>
                        </div>
                    </div>
                    <div className='empty'></div>
                    <div className='footer-social'>
                        <img className='footer-social-icon' height='40px' src={twitter}></img>
                        <img className='footer-social-icon' height='40px' src={facebook}></img>
                        <img className='footer-social-icon' height='40px' src={youtube}></img>
                        <img className='footer-social-icon' height='40px' src={instagram}></img>
                    </div>
                </div>
                <div className='subfooter-wrapper'>
                <div className='footer-subfooter'>
                <div className='footer-location sf-list-item' onClick={() => this.props.handleChange('locations')}><img height="15px" className='logo-imgs' src={pin}></img> United States</div>
                    <div className='footer-copyright sf-list-item'><img height='20px' src={copyright}></img></div>
                    <div className='empty'></div>
                    <div className='subfooter-list'>
                        <div className='footer-guide sf-list-item' onMouseEnter={() => this.handleChange('guide')} onMouseLeave={() => this.handleChange('')}>Guides
                            <GuideModal display={this.state.modal} />
                        </div>
                        <div className='sf-list-item'>Terms of Sale</div>
                        <div className='sf-list-item'>Terms of Use</div>
                        <div className='sf-list-item'>Nike Privacy Policy</div>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}
