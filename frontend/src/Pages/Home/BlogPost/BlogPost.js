import '../vars.css';
import '../BlogPost/BlogPostCSS.css';

function BlogPost(){
    const blogCardInfo = [
        {
            type: 'Article',
            title: 'How do you use social media for growing traffic and sales?',
            img: 'Pictures/client.png',
            name: 'Jessica Parker',
            dt: 'May, 2020 · 5 min ago',
            likes: 34,
            views: 203,
        },
        {
            type: 'Lifestyle',
            title: 'Health & fitness for busy people during times of stress',
            img: 'Pictures/client.png',
            name: 'Jason Bourne',
            dt: 'April, 2020 · 10 min ago',
            likes: 39,
            views: 604,
        },
        {
            type: 'CEO / Office',
            title: 'QR codes - innovative ways to use them in small business',
            img: 'Pictures/client.png',
            name: 'Wanda Maximoff',
            dt: 'March, 2020 · 7 min ago',
            likes: 26,
            views: 436,
        }
    ];

    const blogCard = blogCardInfo.map((card,index) => {
        return(
            <div className='card-blog' key={index}>
                <div className='card-header'>
                    <p>{card.type}</p>
                </div>
                <hr />
                <h4>{card.title}</h4>
                <div className='profile dfsb'>
                    <img src={card.img} alt="ImageHere" />
                    <div className='profile-info'>
                        <p>{card.name}</p>
                        <p className='dt'>{card.dt}</p>
                    </div>
                </div>
                <div className='card-footer df'>
                    <p><i className="bi bi-hand-thumbs-up" /> {card.likes}</p>
                    <p><i className="bi bi-eye-fill" /> {card.views}</p>
                </div>
            </div>
        )
    });

    return(
        <section className='blog-post'>
            <div className="information dfc">
                <h2>Blog Post</h2>
                <p>Blogs are great method to increase traffic and generate leads. Make a profit. Get compensated for your efforts.</p>
            </div>
            <div className='blog-cards df'>
                {blogCard}
            </div>
            <div className='df'>
                <button>Learn More</button>
            </div>
        </section>
    )
}

export default BlogPost;