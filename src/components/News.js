import React, { PureComponent } from 'react'
import NewsItem from './NewsItem'
export default class News extends PureComponent {
 

   constructor(){
    super();
    console.log("Hello this is a constructor from news component");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  //API fetching is done in componentDidMount lifecycle method
 async componentDidMount(){
    console.log("cdm");

    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=22406079519d4517877b5e932615d565&page=1&pageSize=20";

    let data= await fetch(url);

    let parsedData= await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles,
    totalResults:parsedData.totalResults})
    console.log(data);
  }

  //prev click function
handlePrevClick=async()=>{
  console.log("prev is clicked")
  // if(this.state.page<=1){
  //   console.log("You are on first page");
  let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=22406079519d4517877b5e932615d565&page=${this.state.page -1}&pageSize=20`;
   let data= await fetch(url);

    let parsedData= await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles})
  this.setState({
    page: this.state.page - 1 })

}

//next click function
 handleNextClick=async()=>{
  console.log("next is clicked");
  
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=22406079519d4517877b5e932615d565&page=${this.state.page + 1}&pageSize=20`;

    let data= await fetch(url);

    let parsedData= await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles,
      page: this.state.page + 1
   })

}


 



  render() {
    console.log("render");
    return (
      <div>
        <div className="container my-3 ">
       <h2>News-Logs - Top Headlines</h2>
      
       <div className="row">
         {this.state.articles.map((element)=>{return <div className="col-md-3 m " key={element.url} >
        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}   imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>})}
<div style={{justifyContent:"center",
display:"flex",
allignItems:"center",
  marginTop:"20px"}}>

     <button className="btn btn-dark" disabled={this.state.page<=1} style={{marginRight:"20px"}} role="button" onClick={this.handlePrevClick}>← Prev page</button>

        <button className="btn btn-primary" role="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextClick}>Next page →</button>
      
          </div>
        
        </div>
        </div>
      </div>
    )
  }
}
