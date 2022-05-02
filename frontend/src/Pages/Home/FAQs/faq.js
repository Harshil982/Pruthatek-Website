import '../vars.css';
import '../FAQs/faqCSS.css';
import {useState} from "react";

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
                            <div className='FAQanswer'>
                                <p>What platform should we target ?</p>
                            </div>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen1(!isDivOpen1)}><i class="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</h3>
                        {isDivOpen2 && (
                            <div className='FAQanswer'>
                                <p>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</p>
                            </div>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen2(!isDivOpen2)}><i class="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>Should I have a website with all features the same as an application?</h3>
                        {isDivOpen3 && (
                            <div className='FAQanswer'>
                                <p>Should I have a website with all features the same as an application?</p>
                            </div>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen3(!isDivOpen3)}><i class="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>What is the distinction between Cross-platform development vs. Native App development?</h3>
                        {isDivOpen4 && (
                            <div className='FAQanswer'>
                                <p>What is the distinction between Cross-platform development vs. Native App development?</p>
                            </div>
                        )}
                    </div>

                    <h4 onClick={() => setDivIsOpen4(!isDivOpen4)}><i class="bi bi-plus"></i></h4>
                </div>
                <hr />

                <div className='que dfsb'>
                    <div>
                        <h3>What is your project development methodology?</h3>
                        {isDivOpen5 && (
                            <div className='FAQanswer'>
                                <p>What is your project development methodology?</p>
                            </div>
                        )}
                    </div>
                    <h4 onClick={() => setDivIsOpen5(!isDivOpen5)}><i class="bi bi-plus"></i></h4>
                </div>


                {/*}
                <motion.div onClick={() => setIsOpen(!isOpen) } className='que dfsb'>
                    <motion.h3>What platform should we target? iOS / Android or both?</motion.h3>
                    { isOpen && (
                        <motion.div className='FAQanswer'>
                        <p>What platform should we target ?</p>
                        </motion.div>
                    )}
                    <h4><i class="bi bi-plus"></i></h4>
                </motion.div>
                <hr />

                <motion.div className='que dfsb'>
                    <motion.h3>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</motion.h3>
                    <motion.div className='FAQanswer'>
                        <p>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</p>
                    </motion.div>
                    <h4><i class="bi bi-plus"></i></h4>
                </motion.div>
                <hr />

                <motion.div className='que dfsb'>
                    <motion.h3>Should I have a website with all features the same as an application?</motion.h3>
                    <motion.div className='FAQanswer'>
                        <p>Should I have a website with all features the same as an application?</p>
                    </motion.div>
                    <h4><i class="bi bi-plus"></i></h4>
                </motion.div>
                <hr />

                <motion.div className='que dfsb'>
                    <motion.h3>What is the distinction between Cross-platform development vs. Native App development?</motion.h3>
                    <motion.div className='FAQanswer'>
                        <p>What is the distinction between Cross-platform development vs. Native App development?</p>
                    </motion.div>
                    <h4><i class="bi bi-plus"></i></h4>
                </motion.div>
                <hr />

                <motion.div className='que dfsb'>
                    <motion.h3>What is your project development methodology?</motion.h3>
                    <motion.div className='FAQanswer'>
                        <p>What is your project development methodology?</p>
                    </motion.div>
                    <h4><i class="bi bi-plus"></i></h4>
                </motion.div>

                {/*
                <div className='que dfsb'>
                    <details>
                        <summary>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</summary>
                        <p>Supporting the iPad version for iOS and the tablet version for Android will be the right choice?</p>
                    </details>
                    <h4><i class="bi bi-plus"></i></h4>
                </div>
                <hr />
                <div className='que dfsb'>
                    <details>
                        <summary>Should I have a website with all features the same as an application?</summary>
                        <p>Should I have a website with all features the same as an application?</p>
                    </details>
                    <h4><i class="bi bi-plus"></i></h4>
                </div>
                <hr />
                <div className='que dfsb'>
                    <details>
                        <summary>What is the distinction between Cross-platform development vs. Native App development?</summary>
                        <p>What is the distinction between Cross-platform development vs. Native App development?</p>
                    </details>
                    <h4><i class="bi bi-plus"></i></h4>
                </div>
                <hr />
                <div className='que dfsb'>
                    <details>
                        <summary>What is your project development methodology?</summary>
                        <p>What is your project development methodology?</p>
                    </details>
                    <h4><i class="bi bi-plus"></i></h4>
                </div>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What platform should we target? iOS / Android or both?
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>  */}

            </div>
        </section>
    )
}

export default FAQs;