import img from '../PlanningBusiness/image1.png';

/*  CSS Files   */
import '../vars.css'
import '../PlanningBusiness/planningBusinessCSS.css';

function PlanningBusiness() {
    return(
        <section className="planning-business">
            <div className="image">
                <img src={img} alt="ImageHere"/>
            </div>
            <div className="content dfc">
                <h3>We Are here to</h3>
                <h1>Plan Business</h1>
                <p>Ask CDCR San Quintin State Prison 2008. We installed purex dispensers throughout 
                the prison to combat diseases...and it was a Roaring Success (as in Roaring Drink) 
                I mean we had long lines of first fighting to use them.</p>
                <button>Get In Touch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="bi bi-arrow-right"></i></button>
            </div>
        </section>
    );
}

export default PlanningBusiness;