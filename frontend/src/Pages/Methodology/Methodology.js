import React, { useEffect } from 'react';
import CommonCard from '../Company/Components/CommonCard';
import MethodologyData from './Methodology.json'
import keyBenefits from './keyBenefits.json'
import './Methodology.css'

function Methodology(props) {
    document.title = "Methodology"
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="methodology">
            {/* ------TITLE------ */}
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">methodology</h1>
            </div>
            {/* ------IMAGE AND DESCRIPTION------ */}
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src="Pictures/QM_1.png" alt="company_people" />
                    </div>
                </div>
                <div className="QMA-tasks">
                    <p>PruthaTek's development methodology promotes a result-driven interactive approach and guarantees better customer service in terms of quality and cost. If PruthaTek continuously improves our methodology to meet customer expectations through accelerated development schedules and high quality results. We have refined our business processes by blending leading industry practices spanning from classical Waterfall to modern Agile methodologies.</p>
                </div>
            </div>
            {/* ------INFO CARDS------ */}
            <div className="flex-container margin-cont">
                {MethodologyData.map((meth, index) => (
                    <CommonCard data={meth} />
                ))}
            </div>
            {/* ------KEY BENEFITS------ */}
            <div className="key-benefits">
                <h2>Key Benefits You Get</h2>
                <div className="benefits-container">
                    {keyBenefits.map((benefit, index) => (
                        <div className="benefit-card">
                            <img src={benefit.imgPath} alt={benefit.title} />
                            <p className="benefit-title">{benefit.title}</p>
                            <p>{benefit.benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Methodology;