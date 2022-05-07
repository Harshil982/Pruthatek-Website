import '../vars.css';
import '../ClientsReview/ClientsReviewCSS.css';
import img from '../ClientsReview/img.png';

function ClientsReview(){
    /*    Reviews into an array    */
    const reviewsList = [
        {
            profileImg: img,
            title: 'Outstanding!!',
            description: 'I just wanted to drop you a little email to say thank you for all your hark work. I\'m delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.',
            starCode: <i className="bi bi-star-fill"></i>,
            starCnt: 5,
            name: 'Daniel Lane',
            designation: 'Developer'
        },
        {
            profileImg: img,
            title: 'Well Done!!',
            description: 'I just wanted to drop you a little email to say thank you for all your hark work. I\'m delighted I chose you as my partner. Your websites are quite simple to edit and maintain, which is fantastic.',
            starCode: <i className="bi bi-star-fill"></i>,
            starCnt: 5,
            name: 'Parth Padhiar',
            designation: 'Developer'
        }
    ];

    /*  Reviews Div  */
    const reviews = reviewsList.map((rev, index) => {
        return(
            <div className='reviewsList df' key={index}>
                <div className='review-photo'>
                    {/*  Division to create a blurry border  */}
                    <div className='image df'>
                        <img src={rev.profileImg} alt="Image" />
                    </div>
                    <div className='backDesign' />
                </div>
                <div className='review-info'>
                    <img />
                    <h2>{rev.title}</h2>
                    <p>{rev.description}</p>
                    <div className='stars'>
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                        {rev.starCode}
                    </div>
                    <h4 className='df'>{rev.name}, <span>{rev.designation}</span></h4>
                </div>
            </div>   
        )
    });

    /*  Onclick pr reviews slide kravana che. Jenu implementation baki che  */
    function rotateLeft(){
        alert('Button clicked');
    };
    function rotateRight(){
        alert('Button clicked');
    };

    return(
        <section className='client-review'>
            <div className="information dfc">
                <h2>What Out Clients Have To Say</h2>
                <p>Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.</p>
            </div>
            <div className='review'>
                <div className='sliderBtns dfsb'>
                    <button onClick={rotateLeft}><i className="bi bi-chevron-left"></i></button>
                    <button onClick={rotateRight}><i className="bi bi-chevron-right"></i></button>
                </div>
                {reviews}
            </div>
        </section>
    );
}

export default ClientsReview;

