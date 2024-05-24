import NewsItem from "./NewsItem";
import { useState,useEffect } from "react";


const Newsboard = ({category}) => {
  const [articles,setArticles]=useState([]);
  useEffect(()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d49d42bb408d4deea5c7cdd97f768116`;
    fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
  },[category])
  const uppercaseCategory = category.toUpperCase();
  return (
    <div>
      <h1 className="text-center" style={{padding:"20px",color:"red"}} >{uppercaseCategory}</h1>
      
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        
      })}
    </div>
  )
}

export default Newsboard
