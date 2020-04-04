import React from 'react';
import exit from '../../dist/assets/exit.png';
import account from '../../dist/assets/account.png';
import facebook from '../../dist/assets/facebook.png';
import login_logo from '../../dist/assets/login_logo.png';
import login from '../../dist/assets/login.png';

export default class LogInModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
        this.handleExit = this.handleExit.bind(this);
    }

    handleExit(){
        this.props.handleClick('');
        document.body.style.overflow='unset';
    }

    render(){
        if(this.props.display === 'join'){
            document.body.style.overflow='hidden';
            console.log('props--->', this.props.display);
            console.log('document-->', document.body);
            return(
                <div id="join-modal">
                    <div className='exit'><img height='15px' src={exit} onClick={this.handleExit}></img></div>
                    <div className='login-asset'><img height="20px" src={login_logo}></img></div><br></br>
                    <div className='login-asset'><img height="45px" src={account}></img></div><br></br>
                    <input className='input-form input-text' onFocus="this.value=''" type="text" id="name" name="name" defaultValue="Email address"></input>
                    <input className='input-form input-text' type="text" id="password" name="password" defaultValue="Password"></input>
                    <div className='checkbox-container'>
                        <input className='check-box check' type="checkbox" id="keep-login" name="keep-login" value="keep-login"></input>
                        <span className='check-box'>Keep me logged in</span>
                        <div className='check-box' id ='forgot'>Forgot password?</div>
                    </div>
                    <div id='terms'>By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use</u>.</div>
                    <div className='login-asset'><img height="40px" src={login}></img></div>
                    <div className='login-asset'><img height="42px" src={facebook}></img></div>
                    <div id='join-member'>Not a member? <font color="black"><u>Join now</u></font></div>
                </div>
            )
        }
        else{
            return null;
        }
    }

}
