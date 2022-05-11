import '../vars.css';
import '../CashStudies/CashStudiesCSS.css';

function CashStudies() {
    /*  Main Images */
    const imageSource = [
        {
            img: 'Pictures/img1.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img2.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img3.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img4.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img5.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img6.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img7.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
        {
            img: 'Pictures/img8.png',
            heading: "Exam Management System",
            txt: 'Exam Manahgment We\'re full service which means we\'ve got you We\'re full service which means we\'ve got you coverd on design and content right.',
        },
    ]

    const images = imageSource.map((item, index) => {
        return (
            <div className='cashStudiesCard' key={index}>
                <img src={item.img} alt='case-study' />
                <div className='cash-studies-text'>
                    <p>{item.heading}</p>
                    <p>{item.txt}</p>
                </div>
            </div>
        );
    })

    /*  Hovering Images gets colored up */
    const hoverImg = [
        {
            id: 1,
            img: 'Pictures/nike.png',
            img_black: 'Pictures/nike-black.png'
        },
        {
            id: 2,
            img: 'Pictures/pti.png',
            img_black: 'Pictures/pti-black.png'
        },
        {
            id: 3,
            img: 'Pictures/aerofusion.png',
            img_black: 'Pictures/aerofusion-black.png'
        },
        {
            id: 4,
            img: 'Pictures/aurum.png',
            img_black: 'Pictures/aurum-black.png'
        },
        {
            id: 5,
            img: 'Pictures/bio.png',
            img_black: 'Pictures/bio-black.png'
        },
        {
            id: 6,
            img: 'Pictures/hexabyts.png',
            img_black: 'Pictures/hexabyts-black.png'
        },
        {
            id: 7,
            img: 'Pictures/archfin.png',
            img_black: 'Pictures/archfin-black.png'
        },
        {
            id: 8,
            img: 'Pictures/pramukh.png',
            img_black: 'Pictures/pramukh-black.png'
        },
        {
            id: 9,
            img: 'Pictures/aph.png',
            img_black: 'Pictures/aph-black.png'
        }
    ];

    const blackImages = hoverImg.map((image, index) => {
        return (
            <>
                <img src={image.img_black} alt="black" className='blackImg' key={index} />
                <img src={image.img} alt="color" className='colorImg' key={image.id} />
            </>
        )
    });

    return (
            <section className='cash-studies'>
                <div className="information dfc">
                    <h3>Case Studies</h3>
                    <p>Explore how Pruthatek shaped multiple businesses with creativity and innovative technology.</p>
                </div>
                <div className='imageSlider'>
                    {images}
                </div>
                <marquee>
                <div className='hoverImages'>
                    {blackImages}
                </div>
                </marquee>
            </section>
        
    );
}

export default CashStudies;