import React from 'react';
import Hzline from '../../Company/Components/Hzline';
import './../Styles/blogCard.css'

function LatestBlogcard(props) {
    return (
        <div className="latest-blog-card">
            <img src={props.data.imgPath} alt="blog-img" />
            <div className="blog-data">
                <p className="blog-title">{props.data.title}</p>
                <Hzline />
                <p className="blog-date">{props.data.date}</p>
                <p className="blog-short-desc">{props.data.shortdesc}</p>
            </div>
        </div>
    );
}

export default LatestBlogcard;