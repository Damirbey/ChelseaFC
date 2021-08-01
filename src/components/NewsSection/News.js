import React from 'react';
import {Link} from 'react-router-dom';
import './News.css';

function News(props)
{
    const {news}=props;

    return(
        <section>
               {
                   news.map((item)=>{
                       return (
                        
                        <div className="news-box" key={item.id}>
                            <Link to={`/news/${item.id}`}>
                                <img className="newsImage" src={process.env.PUBLIC_URL + item.image} />
                            </Link>
                            <Link to={`/news/${item.id}`}>
                                <h6>{item.title}</h6>
                            </Link>
                            <p> <span className="boldText">Date Published:</span> {item.datePublished}
                            </p>
                            <Link to={`/news/${item.id}`}>
                                <p className="news-content">
                                    {item.content}
                                </p>
                            </Link>  
                        </div>
                        
                       )
                   })
               }                
        </section>
    )
}

export default News;