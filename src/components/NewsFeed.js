import React, { Component } from "react";
import { articles } from "../seedData";
class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      key: articles
    };
  }
  
  render() {
    
    return this.state.key.map((eachArticle,i) => {
      // TODO: start coding!
      return (
        <div key={i} id="eachArticle">
          <h1>{eachArticle.title}</h1>
          <h2>{eachArticle.author}</h2>
          <p>{eachArticle.description}</p>
          <a href={eachArticle.url}><img src={eachArticle.urlToImage} alt="Rob Roy Glacier"/> </a>
          
          <p>Votes: {eachArticle.votes}</p> 
          <button onClick={() => this.handleClick(eachArticle)}>+</button>
        </div>
      );
    });
  }
  handleClick(eachArticle) {   
    const index = this.state.key.indexOf(eachArticle);
    const count= eachArticle.votes+1;  
    const updatedArticle={
      ...eachArticle,
      votes: count
    }
    console.log('updatedArticle',updatedArticle);
    this.setState({
      key:[
        ...this.state.key.slice(0,index),
        updatedArticle,
        ...this.state.key.slice(index+1)
      ]
    })
  }
}

export default NewsFeed;

