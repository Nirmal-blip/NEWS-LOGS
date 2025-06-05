import React, { PureComponent } from 'react'

export default class NewsItem extends PureComponent {
 
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;  //  in class props aise jaate hai function mai default ke andar parenthesis mai smjha easy hai
    return (
      <>
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"	https://ichef.bbci.co.uk/news/1024/branded_news/86c7/live/71f19820-40a7-11f0-a90d-6b992e1c44a7.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More → </a>
  </div>
</div>
</div>
      </>
    )
  }
}
