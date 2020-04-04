import React from 'react';

export default function Help({display, handleChange}){

    var buttons = ['Order Status', 'Shipping and Delivery', 'Returns', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Site Feedback', 'View All'];
    
    if(display === 'help'){
        return(
            <div id='help-dropdown'>
                {buttons.map((button) => (
                    <div className='help-button'> {button} </div>
                ))}
            </div>
        )
    }
    else{
        return null;
    }
}