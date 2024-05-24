import image from '../assets/news.jpg'
import React from 'react';
import '../index.css';

const NewsItem = ({ title, description, src, url,}) => {
  if (title === "[Removed]") {
    return null;
  }
  

  return (
    
    
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "345px",verticalAlign: "top",marginTop:"10px !important" }}>
      <img src={src?src:image}  style={{ height: "200px", width: "100%", objectFit: "cover"}} className="card-img-top" alt="..." />
      <div className="card-body" style={{height:"250px", overflowY: "auto"}}>
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description?description:"No description available for the article. Click read more to read the article."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
     
  );
}

export default NewsItem;

// import React from 'react';
// import '../index.css';

// const NewsItem = ({ title, description, src, url }) => {
//   if (title === "[Removed]") {
//     return null;
//   }

//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ width: "345px", verticalAlign: "top" }}>
//       <img src={src ? src : require('../assets/news.jpg')} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
//       <div className="card-body" style={{ height: "250px" }}>
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description ? description : "No description available for the article. Click read more to read the article."}</p>
//         <a href={url} className="btn btn-primary">Read More</a>
//       </div>
//     </div>
//   );
// }

// export default NewsItem;
