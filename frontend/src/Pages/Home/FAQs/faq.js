import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import '../vars.css';
import '../FAQs/faqCSS.css';

function FAQs() {

    const [isDivOpen1, setDivIsOpen1] = useState(false);
    const [isDivOpen2, setDivIsOpen2] = useState(false);
    const [isDivOpen3, setDivIsOpen3] = useState(false);
    const [isDivOpen4, setDivIsOpen4] = useState(false);
    const [isDivOpen5, setDivIsOpen5] = useState(false);

    return (
        <section className='FAQ'>
            <div className='df'>
                <h2>FAQs</h2>
            </div>
            <div className='questions-list'>

                <div className='que dfsb'>
                    <div>
                        <h3>What platform should we target? iOS / Android or both?</h3>
                        {isDivOpen1 && (
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={500}
                                classNames="trans"
                            >
                                <div className='FAQanswer'>
                                    <p>With the developing platform popularity of both iPhone and the most recent Android cell phones, we prescribe to dispatch the product on the two stages and based on the business requirements.</p>
                                </div>
                            </CSSTransition>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen1(!isDivOpen1)}><i className="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</h3>
                        {isDivOpen2 && (
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={500}
                                classNames="trans"
                            >
                                <div className='FAQanswer'>
                                    <p>Yes, if you have the spending adaptability, you should choose a specific iPad and tablet form of application.</p>
                                </div>
                            </CSSTransition>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen2(!isDivOpen2)}><i className="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>Should I have a website with all features the same as an application?</h3>
                        {isDivOpen3 && (
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={500}
                                classNames="trans"
                            >
                                <div className='FAQanswer'>
                                    <p>It isn't necessary to have a website with the same features as an application. You can target app development first with a one-page website to identify the needs. On getting more foothold, you can update the features as per the requirement and for a responsive site with features same as the application.</p>
                                </div>
                            </CSSTransition>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen3(!isDivOpen3)}><i className="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>What is the distinction between Cross-platform development vs. Native App development?</h3>
                        {isDivOpen4 && (
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={500}
                                classNames="trans"
                            >
                                <div className='FAQanswer'>
                                    <p>
                                        For native app development, we use default language and IDE for the two iOS and Android, for instance, Target C/Swift with xCode for iOS and JAVA/Kotlin with Android studio for Android.
                                    </p>
                                    <p>
                                        Cross-platform development gives a structure where coding is done once; anyway, it tends to send the application in iOS, Android, and Windows telephone.
                                    </p>
                                </div>
                            </CSSTransition>
                        )}
                    </div>

                    <h4 onClick={() => setDivIsOpen4(!isDivOpen4)}><i className="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>What is your project development methodology?</h3>
                        {isDivOpen5 && (
                            <CSSTransition
                                in={true}
                                appear={true}
                                timeout={500}
                                classNames="trans"
                            >
                                <div className='FAQanswer'>
                                    <p>Each web or mobile application development company is different and requires a different methodology. However, most processes go through the regular task development steps: Requirement gathering, planning and analysis, solution consulting, wireframe/prototyping, UI design, development, and testing.</p>
                                </div>
                            </CSSTransition>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen5(!isDivOpen5)}><i className="bi bi-plus"></i></h4>
                </div>

            </div>
        </section>
    )
}

export default FAQs;