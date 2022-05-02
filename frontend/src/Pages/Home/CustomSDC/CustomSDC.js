/*  CSS Files   */
import '../vars.css'
import '../CustomSDC/CustomSDCCSS.css';

function CustomSDC(){
    const cardInfo = [
        {
            imgSrc: '1.png',
            title: "Enterprise Software Development",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: '2.png',
            title: "Web Application Development",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: '3.png',
            title: "Mobile Application Development",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: '4.png',
            title: "E-commerce / Retail",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: '5.png',
            title: "Enterprise Software Development",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
        {
            imgSrc: '6.png',
            title: "Enterprise Software Development",
            description: "Finance, planning, forecasting and adjusting rapidly with customer demands and budgets."
        },
    ];

    const cards = cardInfo.map((item) => {
        return(
            <div className="SDCcard dfc">
                <img src={item.imgSrc} alt="Images" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a>Learn More &nbsp;&nbsp; <i class="bi bi-arrow-right"></i></a>
            </div>
        )
    })

    return(
        <section className="CustomSDC">
            <div className="information dfc">
                <h3>Pruthatek Custom Software Development Company</h3>
                <p>We provide excellent and superior web and mobile app development with a worldwide presence, with top - notch technology. Pruthatek serves 
                customes with a vision to achieve a milestone by giving unique features - rich application that carefully meet the business necessities. 
                We are a full - cycle web and mobile application development company creating the best solutions for mobile apps, web apps and more.</p>
            </div>
            <div className='Cards w100'>
                {cards}
            </div>
        </section>
    );
}

export default CustomSDC;