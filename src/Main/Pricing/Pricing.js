import React from 'react';

class Pricing extends React.Component {
  render() {
    const summary = Object.keys(this.props.selection)
    .map(key => <div className="summary__option" key={key}>
      <div className="summary__option__label">{key}  </div>
      <div className="summary__option__value">{this.props.selection[key].name}</div>
      <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(this.props.selection[key].cost) }
      </div>
  </div>)

    const total = Object.keys(this.props.selection)
      .reduce((acc, curr) => acc + this.props.selection[curr].cost, 0); 

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(total) }
          </div>
        </div>
      </section>
    )
  }
}

export default Pricing;