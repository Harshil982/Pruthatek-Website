/*  CSS Files   */
import '../vars.css'
import '../CustomSDC/CustomSDCCSS.css';
import { Link } from 'react-router-dom';

function CustomSDC(){
    const cardInfo = [
        {
            imgSrc: 'Pictures/1.png',
            title: "Enterprise Software Development",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: 'Pictures/2.png',
            title: "Web Application Development",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: 'Pictures/3.png',
            title: "Mobile Application Development",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: 'Pictures/4.png',
            title: "E-commerce / Retail",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: 'Pictures/5.png',
            title: "Artificial Intelligence",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: 'Pictures/6.png',
            title: "Machine Learning",
            linkTo : "/Artificial-Intelligence",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
    ];

    const cards = cardInfo.map((item, index) => {
        return(
            <div className="SDCcard dfc" key={index}>
                <img src={item.imgSrc} alt="Images" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.linkTo}>Learn More &nbsp;&nbsp; <i className="bi bi-arrow-right"></i></Link>
            </div>
        )
    })

    return(
        <section className="CustomSDC">
            <div className="information">
                <h3>Pruthatek Custom Software Development Company</h3>
                <p>We provide excellent and superior web and mobile app development with a worldwide presence, with top - notch technology. Pruthatek serves 
                customes with a vision to achieve a milestone by giving unique features - rich application that carefully meet the business necessities. 
                We are a full - cycle web and mobile application development company creating the best solutions for mobile apps, web apps and more.</p>
            </div>
            <div className='custom-flex-cont'>
                {cards}
            </div>
        </section>
    );
}

export default CustomSDC;