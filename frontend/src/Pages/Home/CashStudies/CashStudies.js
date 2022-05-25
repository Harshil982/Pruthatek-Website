import '../vars.css';
import '../CashStudies/CashStudiesCSS.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CashStudies() {
    /*  Main Images */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const imageSource = [
        {
            img: 'Pictures/img1.png',
            heading: "ERP Management System",
            txt: 'ERP stands for enterprise resource planning , It\'s software that manages a company\'s financials, supply chain,opearations,commerce,reporting , manufacturing,and human resource activities',
        },
        {
            img: 'Pictures/img2.png',
            heading: "Hospital Management System",
            txt: 'Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as Clinical',
        },
        {
            img: 'Pictures/img3.png',
            heading: "Lawyer Management System",
            txt: 'It is an integrated digital workspace from where you can run your operations, manage your project and matters, and collaborate with the client from anywhere. It gives you instant authorized access from any device, to assign and manage tasks, monitor workflow, documents, dates, notifications.',
        },
        {
            img: 'Pictures/img4.png',
            heading: "E-commerce Management System",
            txt: 'An ecommerce content management system (CMS) is software that enables ecommerce shop owners to create, edit and publish digital website content without writing any code. It comes with some crucial ecommerce capabilities like product inventory management, shopping cart, shipping and payment gateway integrations.',
        },
        {
            img: 'Pictures/img5.png',
            heading: "Exam Management System",
            txt: 'The Exam Management System is designed to manage, track and monitor the examination activities of college universities. An invigilator can use this system to manage his or her duties, such as exchanging assignments, exam planning, creating Exam papers, question bank with their solution, etc.',
        },
        {
            img: 'Pictures/img6.png',
            heading: "Billing Management System",
            txt: 'It helps the business owner\'s in a comprehensive manner to keep a track of multiple invoices and accounts just by a few clicks on the mouse. It helps in managing chain of stores as well as multiple company billing systems. It also provides recurring service and renting business billing solution.',
        },
        {
            img: 'Pictures/img7.png',
            heading: "Travel and Hospitality",
            txt: 'The travel and hospitality industry includes a broad range of companies: tour operators, travel consolidators, tourist boards, airlines, cruise lines, railroads, private transportation providers, car rental services, hotels, resorts, lodging, restaurants and other real-estate intensive consumer businesses.',
        },
        {
            img: 'Pictures/img8.png',
            heading: "Media and entertainment",
            txt: 'Media and entertainment includes movies, television shows, radio shows, news, music, magazines and books.',
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
                    <p>Explore how Pruthatek shaped multiple businesse with creativity and innovative technology.</p>
                </div>
                <div className="case-slick">
                <Slider {...settings}>
                    {imageSource.map((source,index) => (
                        <div className="case-card">
                            <img src={source.img} alt={source.heading} />
                            <div className="case-card-content">
                                <h3>{source.heading}</h3>
                                <p>{source.txt}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
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