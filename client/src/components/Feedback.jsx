import React from 'react';
import exit from '../../dist/assets/exit.png';
import login_logo from '../../dist/assets/logo.png';
import star from '../../dist/assets/star.png';
import filledStar from '../../dist/assets/filled-star.png';


export default class Feedback extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: 'stars',
            stars: '',
            starsSubmitted: '',
            feedbackTopic: false,
            expanded: false
        }

        this.submitStars = this.submitStars.bind(this);
        this.handleStars = this.handleStars.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.exitForm = this.exitForm.bind(this);
    }

    handleStars(num){
        this.setState({
            stars: num
        })
    }

    submitStars(num){
        if(!this.state.expanded){
            this.setState({
                starsSubmitted: num,
                feedbackTopic: true,
                expanded: true
            })
        }
        else{
            this.setState({
                starsSubmitted: num,
                feedbackTopic: true
            })
        }
    }

    exitForm(){
        this.setState({
            display: 'exit'
        })
    }

    handleExit(){
        this.props.handleClick('');
        document.body.style.overflow='unset';
        this.setState({
            display: 'stars',
            stars: '',
            starsSubmitted: '',
            feedbackTopic: false,
            expanded: false
        })
    }

    render(){
        if(this.props.display === 'feedback' && this.state.display === 'stars'){
            document.body.style.overflow='hidden';
            return(
                <div id='feedback-modal'>
                    <div className='feedback-exit'><img height='10px' src={exit} onClick={this.handleExit}></img></div>
                    <div className='feedback-logo'><img height="30px" src={login_logo}></img></div><br></br>
                    <div className='feedback-text'>HOW WOULD YOU RATE YOUR EXPERIENCE WITH US?</div>
                    <div className='stars-container'>
                        <div className='star' onClick={(() => this.submitStars(1))} onMouseEnter={(() => this.handleStars(1))} onMouseLeave={(() => this.handleStars(0))}>
                            {(this.state.stars || this.state.starsSubmitted) >= 1 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onClick={(() => this.submitStars(2))} onMouseEnter={(() => this.handleStars(2))} onMouseLeave={(() => this.handleStars(0))}>
                            {(this.state.stars || this.state.starsSubmitted) >= 2 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onClick={(() => this.submitStars(3))} onMouseEnter={(() => this.handleStars(3))} onMouseLeave={(() => this.handleStars(0))}>
                            {(this.state.stars || this.state.starsSubmitted) >= 3 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onClick={(() => this.submitStars(4))} onMouseEnter={(() => this.handleStars(4))} onMouseLeave={(() => this.handleStars(0))}>
                            {(this.state.stars || this.state.starsSubmitted) >= 4 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                        <div className='star' onClick={(() => this.submitStars(5))} onMouseEnter={(() => this.handleStars(5))} onMouseLeave={(() => this.handleStars(0))}>
                            {(this.state.stars || this.state.starsSubmitted) >= 5 ? <img src={filledStar}></img> : <img src={star}></img>}
                        </div>
                    </div>
                    {this.state.feedbackTopic ? <FeedbackForm exitForm={this.exitForm}/> : null} 
                </div>
            )
        }
        else if(this.props.display === 'feedback' && this.state.display === 'exit'){
            return(
                <div className='thank-you-message'>
                    <div className='feedback-exit'><img height='10px' src={exit} onClick={this.handleExit}></img></div>
                    <div className='thank-you-header'>THANK YOU</div>
                    <div className='thank-you-text'>We appreciate your feedback.</div>
                </div>
            )
        }
        else{
            return null;
        }
    }
}

class FeedbackForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: ''
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e){
        document.getElementById('feedback-modal').classList.toggle('expand');
        this.setState({
            display: e.target.value
        })
    }

    render(){
        
        return(
        <div className='topic-form'>
            <div className='overlay-background'></div>
            <div className='feedback-text'>WHAT WOULD YOU LIKE TO TELL US MORE ABOUT?</div>
            <select id="topic-dropdown" onChange={this.handleSelect}>
                <option value="placeholder">Select a Feedback Topic</option>
                <option value="experience">Our Website (Nike.com)</option>
                <option value="default">Our Apps</option>
                <option value="product">Our Products</option>
                <option value="experience">Our Retail Locations</option>
                <option value="default">Customer Service Experience</option>
                <option value="default">Nike as a Company</option>
                <option value="default">None of the Above</option>
            </select>
            {this.state.display === 'default' ? <DefaultSubmission exitForm={this.props.exitForm}/> : null}
            {this.state.display === 'product' ? <ProductSubmission exitForm={this.props.exitForm}/> : null}
            {this.state.display === 'experience' ? <ExperienceSubmission exitForm={this.props.exitForm}/> : null}
        </div>
        )
    }
}

function ProductSubmission(props){
    return(
        <div className='product-submission'>
            <div className='feedback-text'>WHAT TYPE OF PRODUCT?</div>
            <select id="topic-dropdown">
                <option value="placeholder">Select a Product Category</option>
                <option value="placeholder">Shoes</option>
                <option value="placeholder">Clothing</option>
                <option value="placeholder">Accessories & Equipment</option>
                <option value="placeholder">Other</option>
            </select>
            <DefaultSubmission exitForm={props.exitForm}/>
        </div>
    )
}


function ExperienceSubmission(props){
    var dropdown = ['Browse/See What\'s New', 'Look for a Specific Product', 'Research/Compare Products in Person', 'Try on/out a Produict', 'Pick-Up an Online Order', 'Attend a Store Event', 'Get Advice from a Store Athlete', 'None of the Above'];

    return(
    <div className='experience-submission'>
        <div className='feedback-text'>DESCRIBE YOUR EXPERIENCE. WHAT WAS POSITIVE? WHAT CAN WE IMPROVE?</div>
        <textarea className='feedback-textarea'></textarea>
        <div className='feedback-text'>WHAT WAS YOUR GOAL FOR YOUR STORE VISIT?</div>
            <select id='topic-dropdown'>
                <option value='placeholder'>Select a Reason</option>
                {dropdown.map((item) => (
                    <option value='placeholder'>{item}</option>
                ))}
            </select>
        <div className='feedback-text'>HOW EASY WAS IT TO ACCOMPLISH THAT GOAL?</div>
        <table>
            <tr className='radio-rating-container'>
                <label className='radio-rating-num'> 1<br></br> 
                    <input type="radio" name="rating" value='1'></input>
                    <div className='radio-label'>Very Difficult</div>
                </label>
                <label className='radio-rating-num'> 2<br></br> 
                    <input type="radio" name="rating" value='2'></input>
                </label>
                <label className='radio-rating-num'>3<br></br> 
                    <input type="radio" name="rating" value='3'></input>
                </label>
                <label className='radio-rating-num'>4<br></br> 
                    <input type="radio" name="rating" value='4'></input>
                </label>
                <label className='radio-rating-num'>5<br></br> 
                    <input type="radio" name="rating" value='5'></input>
                    <div className='radio-label'>Very Easy</div>
                </label>

            </tr>
        </table>
        <DefaultSubmission exitForm={props.exitForm}/>
    </div>
    )
}

function DefaultSubmission(props){

    return(
        <div className='default-submission'>
            <div className='feedback-text'>PLEASE SHARE YOUR FEEDBACK.</div>
            <textarea className='feedback-textarea'></textarea>
            <div className='assistance-text'>We are unable to respond to requests submitted here.
            If you need assistance with your Nike Product or Services please click here to contact us.</div>
            <input type='button' value='SUBMIT' onClick={props.exitForm}></input>
        </div>
    )
}