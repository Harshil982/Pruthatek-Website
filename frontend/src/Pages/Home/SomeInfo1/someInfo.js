import '../vars.css';
import '../SomeInfo1/someInfoCSS.css';
import img from '../SomeInfo1/img.png';

function SomeInfo(){
    return(
        <section className="someInfo-1 dfse">
            <div className='divWithImage'>
                {/*  Division to create a blurry border  */}
                <div className='image df'>
                    <img src={img} alt="Image" />
                </div>
                <div className='backDesign' />
            </div>
            <div className='information'>
                <h3>We Transform Every Dream To Reality.</h3>
                <p>Now you can see your results online. Just sign up and wonderful serenity has taken possession</p>
                <h5>Cloud based service free space</h5>
                <p>We're full service which means we have got you covered on design and content right. We're full service which means we have got you covered on design and content right.</p>
                <h5>Responsive and mobile friendly design</h5>
                <p>We're full service which means we have got you covered on design and content right. We're full service which means we have got you covered on design and content right.</p>
            </div>
        </section>
    );
}

export default SomeInfo;