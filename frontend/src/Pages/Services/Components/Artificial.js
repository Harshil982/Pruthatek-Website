import React, { useEffect } from 'react';
import "./../Styles/AI.css"
import AIdata from './../JSON/AIdata.json'
import CommonCard from '../../Company/Components/CommonCard';
import ConsltingData from './../JSON/AIConsultingService.json'
// import { AiOutlineCheck } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';

function AI(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    document.title = "Artificial Intelligence"
    return (
        <div className="methodology">
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">Artificial Intelligence</h1>
            </div>
            <div className="flex-container margin">
                <div className="company_people-img-cont" >
                    <div className="shadow"></div>
                    <div className="company_people-img">
                        <img src="Pictures/AI-1.jpg" alt="company_people" />
                    </div>
                </div>
                <div className="QMA-tasks">
                    <p>As a leading artificial intelligence service provider, we deliver the best services for text-to-speech, natural language processing, knowledge virtualization, and more.</p>
                </div>
            </div>
            {/* -----Get your business smarter------- */}
            <div className="get-your-busi">
                <h2>Get Your Business Smarter With Our Artificial Intelligence Services</h2>
                <p>At PruthaTek, we offer technology solutions and practical artificial intelligence solutions to helps our customers perform smarter. Our expert engineers are trained for the best Al technologies and deliver Al-powered solutions to automate & improve sales operations and offer state-of-the-art customer experiences Leverage the benefit of Al services that help us deliver innovative, unique, and effective solutions.</p>
            </div>
            <div className="business-cont-flex-container">
                {AIdata.map((data, index) => (
                    <CommonCard data={data} />
                ))}
            </div>
            {/* Our AI consulting services */}
            <div className="AI-consulting">
                <h2>Our Artificial Intelligence Consulting Services</h2>
                <div className="consulting-card-container">
                    {ConsltingData.map((consult, index) => (
                        <div className="consulting-card">
                            <p className="consultancy-title">{consult.consultancyTitle}</p>
                            <p className="consultancy-desc">{consult.consultancyDesc}</p>
                            {consult.consultancyPoints.map((point, index) => (
                                <p className="consultancy-point"><GiCheckMark />&nbsp;&nbsp;&nbsp;{point}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AI;