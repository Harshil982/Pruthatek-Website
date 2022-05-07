import React from 'react';
import './../Styles/Blog.css'
import LatestBlogcard from './LatestBlogcard';
import blogsData from './../JSON/blogsData.json'
import BlogPost from '../../Home/BlogPost/BlogPost';
import Hzline from '../../Company/Components/Hzline';

function Blog(props) {
    document.title = "Blogs"
    return (
        <div className="pruthatek-blogs">
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">software development insights</h1>
                <p className="qulty-desc">Our versatile and industry-driven experience has opened doors of opportunities for global businesses. Untap the true potential of our technology experts who have penned down their viewpoints through these blogs.</p>
            </div>
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src="Pictures/QM_1.png" alt="company_people" />
                    </div>
                </div>
                <div className="QMA-tasks">
                    <h2>CATEGORIES</h2>
                    <ul>
                        <li>All</li>
                        <li>Mobile App Development</li>
                        <li>Web Development</li>
                        <li>Start Up's</li>
                        <li>DevOps</li>
                    </ul>
                </div>
            </div>
            <br />
            {/* Latest Blogs */}
            <div className="latest-blogs">
                <h2>Latest Blogs</h2>
                <div className="latest-blogs-container">
                    {blogsData.map((blog, index) => (
                        <LatestBlogcard data={blog} />
                    ))}
                </div>
            </div>
            <BlogPost />
            {/* hover cards */}
            <div className="hover-cards-container">
                {blogsData.slice(0, 3).map((blog, index) => (
                    <div className="hover-cards">
                        <img src="Pictures/img2.png" alt="hover-images" />
                        <div className="hover-card-data">
                            <p>{blog.title}</p>
                            <Hzline />
                            <p>{blog.date}</p>
                            <p>{blog.shortdesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;