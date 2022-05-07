import '../vars.css';
import '../ChooseUs/chooseUsCSS.css';

function ChooseUs(){
    const categoryCardInfo = [
        {
            img: 'Pictures/categoryCardImg1.png',
            title: 'Method Management',
            detail: 'PruthaTek follows standard and reliable development and IT services methodology and a thoughtful process that ensures business reliability. We combine our expertise with proven methods.',
        },
        {
            img: 'Pictures/categoryCardImg2.png',
            title: 'Quality Management',
            detail: 'Quality is our priority, and we guarantee for safer and more secure mobile and web solution, launch and deliver web and mobile app by ensuring quality in terms of usability, performance and security.',
        },
        {
            img: 'Pictures/categoryCardImg3.png',
            title: 'Business Continuity',
            detail: 'Your business solution should be safe and secure with our expertise in development. At PruthaTek, we deliver secure and quality IT sevices, protecting your critical data with the required technology.',
        },
        {
            img: 'Pictures/categoryCardImg4.png',
            title: 'Engagement Models',
            detail: 'Your business solution should be safe and secure with our expertise in development. At PruthaTek, we deliver secure and quality IT sevices, protecting your critical data with the required technology.',
        },
    ];

    const categoryCard = categoryCardInfo.map((card, index) => {
        return(
            <div className='CUcard dfc' key={index}>
                <img src={card.img} alt="Image" />
                <h3>{card.title}</h3>
                <div />
                <hr className='w50' />
                <p>{card.detail}</p>
                <a>Learn More &nbsp;&nbsp; <i className="bi bi-arrow-right"></i></a>
            </div>
        )
    });

    return(
        <section className='choose-us'>
            <div className='information df'>
                <h3>Why choose us as Your Mobile / Web Development Partner ? </h3>
            </div>
            <div className='category-cards df'>
                {categoryCard}
            </div>
        </section>
    )
}

export default ChooseUs;