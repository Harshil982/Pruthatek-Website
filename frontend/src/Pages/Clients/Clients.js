import React from 'react';
import MainInfo from '../Company/Components/MainInfo';
import clients from './Clients.json'
import './Clients.css'

function Clients(props) {
    document.title = "Our Clients"
    const mainInfoData = {
        imgPath: "Pictures/QM_1.png",
        Desc: ["A Customer is the most important visitor on our premises; he is not dependent on us. We are dependent on him. He is not Interruption in our work. he is the purpose of it. he is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an oppotunity to do so."]
    }
    return (
        <div className="pruthatek-clients">
            <div className="qulty-mngmnt">
                <h1 className="qulty-mngmnt-title">our clients</h1>
                <p className="qulty-desc">Happy and satisfied clients.</p>
            </div>
            <MainInfo data={mainInfoData} />
            <svg viewBox="0 0 200 200" className="blob" xmlns="http://www.w3.org/2000/svg">
                <path fill="#63c6ff" d="M43.5,-56.3C57.1,-50,69.4,-38.2,72.2,-24.6C75.1,-11,68.6,4.6,63.5,20.8C58.5,37,54.9,53.9,44.6,64.2C34.3,74.5,17.1,78.2,-1.2,79.8C-19.5,81.4,-38.9,80.9,-49.2,70.6C-59.5,60.3,-60.6,40.2,-61.7,23.3C-62.7,6.3,-63.8,-7.4,-60.8,-20.8C-57.9,-34.2,-50.9,-47.3,-40.1,-54.6C-29.3,-61.8,-14.6,-63.1,0.1,-63.3C14.9,-63.5,29.9,-62.6,43.5,-56.3Z" transform="translate(100 100)" />
            </svg>
            <svg viewBox="0 0 200 200" className="blob-2" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8FC320" d="M43.5,-56.3C57.1,-50,69.4,-38.2,72.2,-24.6C75.1,-11,68.6,4.6,63.5,20.8C58.5,37,54.9,53.9,44.6,64.2C34.3,74.5,17.1,78.2,-1.2,79.8C-19.5,81.4,-38.9,80.9,-49.2,70.6C-59.5,60.3,-60.6,40.2,-61.7,23.3C-62.7,6.3,-63.8,-7.4,-60.8,-20.8C-57.9,-34.2,-50.9,-47.3,-40.1,-54.6C-29.3,-61.8,-14.6,-63.1,0.1,-63.3C14.9,-63.5,29.9,-62.6,43.5,-56.3Z" transform="translate(100 100)" />
            </svg>
            <div className="clients-list">
                {clients.map((client, index) => (
                    <div className="client">
                        <img src={client.imgPath} alt="company-logo" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;