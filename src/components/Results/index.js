import React, { Component } from 'react';

class Results extends Component {

  render(){
    if(!this.props.results){
      return (
        <div> No Results! </div>
      )
    }
    return (
      <div>
        {
          this.props.results[1].map((title, key) =>
            <div className="card" key={title}>
              <h1> <a href={this.props.results[3][key]}>{title}</a> </h1>
              <p>
                {this.props.results[2][key]}
              </p>
            </div>
          )
        }
      </div>
    )
  }
}

export default Results;
