import React from 'react';
import exit from '../../dist/assets/exit.png'

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }

    handleSearch(e){
        var keyword = e.target.value;
        this.props.handleChange('search');
        this.props.setKeyword(keyword);
        this.setState({
            keyword: keyword
        })
    }

    handleExit(e){
        console.log('exiting!'
        );
        this.props.handleChange('');
        document.getElementsByClassName('search-bar')[0].value = '';
        document.body.style.overflow='unset';
        this.setState({
            keyword: ''
        })
    }

    render(){
            return(
                <div className='search-group'>
                    <input type="text" className='search-bar' placeholder="Search" onChange={this.handleSearch}></input>
                    <img className={this.state.keyword.length > 0 ? 'search-exit' : 'hidden'} height='10px' src={exit} onClick={this.handleExit}></img> 
                </div>

            );
    }
}