import React from 'react';
import image from '../../images/NewsSection/news1.png';
import './News.css';

function News(props)
{
    const {news}=props;

    return(
        <section>
            {news.map((item)=>{
                return(            
                    <div className="news-box">
                        <img src={`../../images/NewsSection/${item.image}`} alt={item.image} />
                        <h6>{item.title}</h6>
                        <p> <span className="boldText">Date Published:</span> {item.datePublished}
                        </p>
                        <p className="news-content">
                            {item.content}
                        </p>
                    </div>
                    )
                })
            }                
        </section>
    )
}

export default News;