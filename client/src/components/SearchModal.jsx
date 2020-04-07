import React from 'react';
import SearchModalProducts from './SearchModalProducts.jsx';
import axios from 'axios';
import exit from '../../dist/assets/exit.png';

let collections = [
  ...require('../../../database/pregeneratedData/collection.js'),
  ...["Men's Shoe", "Women's Shoe", "Running", "Run"]
];

export default class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      selected: '',
      products: [],
      productCount: ''
    };
  }

  getSuggestedCollection() {
    var keyword = this.props.keyword;
    const regex = new RegExp(keyword, 'i');
    var match = collections.filter((collection) => collection.match(regex));
    console.log(match);
    if (match.length > 0) {
      var shortenedMatch = match.splice(0, 6);
      this.setState(
        {
          suggestions: shortenedMatch,
          selected: shortenedMatch[0]
        },
        () => {
          axios
            .get(`/search/${this.state.selected}`)
            .then((result) => {
              var shoes = result.data;
              var shoeCount = result.data.length;
              var shortenedShoes = [];
              var shoeNames = [];

              shoes.forEach((shoe) => {
                if (!shoeNames.includes(shoe.item)) {
                  shortenedShoes.push(shoe);
                  shoeNames.push(shoe.item);
                }
              });

              if (shortenedShoes.length > 6) {
                shortenedShoes = shortenedShoes.slice(0, 6);
              }

              this.setState({
                products: shortenedShoes,
                productCount: shoeCount
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    } else {
      this.props.handleChange('');
      document.body.style.overflow = 'unset';
    }
  }

  handleHover(suggestion) {
    axios
      .get(`/search/${suggestion}`)
      .then((result) => {
        var shoes = result.data;
        var shoeCount = result.data.length;
        var shortenedShoes = [];
        var shoeNames = [];

        shoes.forEach((shoe) => {
          if (!shoeNames.includes(shoe.item)) {
            shortenedShoes.push(shoe);
            shoeNames.push(shoe.item);
          }
        });

        if (shortenedShoes.length > 6) {
          shortenedShoes = shortenedShoes.slice(0, 6);
        }

        this.setState({
          selected: suggestion,
          products: shortenedShoes,
          productCount: shoeCount
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.keyword !== prevProps.keyword &&
      this.props.keyword.length > 1
    ) {
      this.getSuggestedCollection();
    }
  }

  render() {
    if (this.props.display === 'search' && this.props.keyword.length > 1) {
      document.body.style.overflow = 'hidden';
      return (
        <div className="search-modal">
          <div className="result-display">
            <div className="search-results-container">
              <div id="top-suggestions">TOP SUGGESTIONS</div>
              <SearchModalProducts
                products={this.state.products}
                productCount={this.state.productCount}
                handleChange={this.props.handleChange}
              />
              {this.state.productCount < 50 ? (
                <div id="view-all">View All ({this.state.productCount})</div>
              ) : (
                <div id="view-all">View All ({this.state.productCount}+)</div>
              )}
            </div>
          </div>
          <div className="match-suggestions">
            <div className="search-results-container">
              {this.state.suggestions.map((suggestion) => (
                <div
                  className={
                    this.state.selected === suggestion
                      ? 'suggestion-active'
                      : 'suggestion'
                  }
                  onMouseEnter={() => this.handleHover(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
