import '../vars.css';
import '../SomeInfo1/someInfoCSS.css';
import img from '../SomeInfo1/img.png';

function SomeInfo2(){
    return(
        <section className="someInfo-2 dfse">
            <div className='information'>
                <h3>Pruthatek maintains a Comprehensive, Thoughtful process that ensures Business Continuity and Ultimate Reliaility.</h3>
                <p>Pruthatek has been delivering software development and related IT sevices. We combine proven methodologies, business domain knowledge and technology expertise.</p>
            </div>
            <div className='divWithImage'>
                <div className='backDesign' />

                {/*  Division to create a blurry border  */}
                <div className='image df'>
                    <img src={img} alt="Image" />
                </div>
            </div>
        </section>
    );
}

export default SomeInfo2;