import img1 from '../PlanningBusiness/image1.png';
import img2 from '../PlanningBusiness/image2.png';
import img3 from '../PlanningBusiness/image3.png';

import React, { useState } from 'react';

/*  CSS Files   */
import '../vars.css'
import '../PlanningBusiness/planningBusinessCSS.css';

function PlanningBusiness() {

    /*  Content Array of Objects  */
    const Content = [
        {
            img: img1,
            h3: 'We Are here to',
            title: 'Plan Business',
            desc: 'Ask CDCR San Quintin State Prison 2008. We installed purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drink) I mean we had long lines of first fighting to use them.',
            btn: 'Get In Touch',
        },
        {
            img: img2,
            h3: 'We Are here to',
            title: 'Plan Business',
            desc: 'Ask CDCR San Quintin State Prison 2008. We installed purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drink) I mean we had long lines of first fighting to use them.',
            btn: 'Get In Touch',
        },
        {
            img: img3,
            h3: 'We Are here to',
            title: 'Plan Business',
            desc: 'Ask CDCR San Quintin State Prison 2008. We installed purex dispensers throughout the prison to combat diseases...and it was a Roaring Success (as in Roaring Drink) I mean we had long lines of first fighting to use them.',
            btn: 'Get In Touch',
        }
    ];

    /*  const [slideDiv, setSlideDiv] = useState(1); */
    
    /*  Content Mapping */
    const contentDiv = Content.map((item, index) => {
        return (
            <div className='contentDiv' key={index}>
                <div className="image">
                    <img src={item.img} />
                </div>
                <div className="content dfc">
                    <h3>{item.h3}</h3>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                    <button>{item.btn} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        )
    })
    
    return(
        <section className="planning-business">
            {contentDiv}
        </section>
    );
}

export default PlanningBusiness;