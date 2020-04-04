import React from 'react';

export default class SearchModalProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelect(product) {
    this.props.handleChange('');
    window.location.hash = product.id;
  }

  render() {
    return (
      <div className="product-container">
        {this.props.products.map((product) => (
          <div className="product" onClick={(e) => this.handleSelect(product)}>
            <img
              height="120px"
              src={product.image}
              className="product-photo"
            ></img>
            <div className="product-text">
              <div className="product-name">{product.item}</div>
              <div className="product-type-price">{product.type}</div>
              <div className="product-type-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
