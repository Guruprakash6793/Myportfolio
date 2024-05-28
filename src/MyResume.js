import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import guru from './Images/Guruprakash1.jpg'
import polylogo from './Images/polylogo.jpg'
import clglogo from './Images/clglogo.png'
import './res.css';
import restaurant from './Images/restaurant_app.png'
import themepark from './Images/themepark.png';
import admin from './Images/admin.png';
import userui from './Images/userui.png';
import todolist from './Images/todolist.png';
import notes from './Images/notes_app.png'
import dictionary from './Images/dictionary.png'
import game from './Images/snakegame.png'
import age from './Images/age.png'
import clock from './Images/clock.png'
import bmi from './Images/bmi.png'
import calc from './Images/calc.png'






function MyResume() {

    const handleClick=()=>{
          
    }
    return(
    <>
       {/* mobile nav toggle button */}
        <input type="checkbox" id='check' className="check" />
        <label for='check'>
            <i class="bi bi-list barbutton d-xl-none" onClick={handleClick}></i>
       </label>
    {/* header Start */}
    <header id='header' className='d-flex flex-column'>   
        {/* profile creating */}
        <div className="profile">
                <img src={guru} alt="profile"/>
                <h4>Guruprakash</h4>
                <div className="social-media mt-3 text-center">
                <a href="https://in.linkedin.com/" rel="noreferrer" target="_blank" class="linkedin"><i class="bi bi-linkedin"></i></a>       
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="https://login.live.com/" rel="noreferrer" target="_blank" class="google-plus"><i class="bi bi-skype"></i></a>                
                <a href="https://github.com/" rel="noreferrer" target="_blank" class="twitter"><i class="bi bi-github"></i></a>
                </div>

        </div>
        {/* nav bar links */}
        <nav id='navbar' className="nav">
            <ul style={{listStyle:'none'}}>
                <li><a className="nav-link active" href="#home"><i class="bi bi-house-door-fill"></i><span>Home</span></a></li>
                <li><a className="nav-link" href="#about"><i class="bi bi-person-fill"></i><span>About</span></a></li>
                <li><a className="nav-link" href="#education"><span><i class="bi bi-person-fill"></i>Education</span></a></li>
                <li><a className="nav-link" href="#experience"><span><i class="bi bi-person-fill"></i>Experience</span></a></li>
                <li><a className="nav-link" href="#projects"><i class="bi bi-projector-fill"></i><span>Projects</span></a></li>
                <li><a className="nav-link" href="#skills"><span><i class="bi bi-person-fill"></i>Skills</span></a></li>
            </ul>
        </nav>
    </header>
    {/* header end */}
     {/* ____________hero section___________ */}
        
    <section id='hero' className="d-flex flex-column">
        <div className="hero-container">
            <h1>Hi, I'm Guruprakash</h1>
            <p><span className="typed" data-typed-items='Web developer,Stock market Advisor,Sales Executive'>Full-Stack Web Developer</span></p>
            
        </div> 
    {/* ___________end hero section____________ */}

    </section>  
    <main id='main'>
        {/*________ about Section____________ */}

        <section id='about' className="about">
            <div className="container">
                <div className='section-title'>
                    <h3>About</h3>
                    <p>
                      Highly motivated and professional with 9 years of experienced. 6 Months intern of Front-End development. 1.5 years Experienced in Share Market. 4 Years experience in sales engineer with a proven track record of selling pumps and motors with high degree of customer service skills. 2 years experienced Well Knowledge on Desktop Support Engineer. 1 year Experienced in Service Engineer.   
                       
                    </p>
                </div>
                    <div className="row">
                        <div className="col-lg-4">
                                <img src={guru} data-aos='fade-right' width={200} height={200} className="img-fluid" alt='profile' />
                        </div>
                        <div className="col-lg-8 content">
                                <h3>Front-End Developer</h3>
                                                           <div className="row">
                                <div className="col-lg-6">
                                <ul> 
                                    <li><i class="bi bi-star-fill"></i><strong>Birthday:</strong><span>06-07-1993</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>Degree:</strong><span>BE</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>City:</strong><span>Salem</span></li>
                                </ul> 
                                </div>
                                <div className="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-star-fill"></i><strong>Age:</strong><span>29</span></li>
                                    <li><i class="bi bi-star-fill"></i><strong>Address</strong><span>Salem</span></li>
                                     <li><i class="bi bi-star-fill"></i><strong>Phone#</strong><span>+91 9566679308</span></li>
                                </ul>
                                </div>
                                <p>Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies. Proven track record in improving website traffic, performance, and functionality through the implementation of front-end coding standards and troubleshooting.</p>
                            </div>

                        </div>
                    </div>
            </div>

        </section>
    {/*__ Education Details__     */}

        <section id="education" className='education'>
            <div className="container">
            <div className="section-title">
                <h3>Education</h3>
                </div>
                <div className="row edu-details">
                    <div className="col-lg-6 college">
                            <div className="card-body bbox">
                            <img src={clglogo} width={70} height={70} alt="college logo" />
                        
                            <h5 >Knowledge Institute of Technology,Salem, TamilNadu. </h5> 
                            
                            <span className="card-subtitle" >2015 (71%)</span>
                            </div>
                    </div>
                    <div className="col-lg-6 polytechnic">
                        <div className="card-body bbox">
                            <img  src={polylogo} width={70} height={70} alt="polytechnic_logo" />
                                    <h5>Mahendra Polytechnic college Namakkal, TamilNadu.</h5>
                                    <span >2011 (88%)</span>
                                    </div>
                    </div>
                </div>

            </div>

        </section>
        {/* ____________Work experience section___________ */}
    
    <section id='experience' className="experience">
        <div className="container">
            <div className="section-title">
                <h3>Work Experience</h3>
            </div>
            <div className="row work-experience mb-3">
            <div className="col-lg-4">
                <div className="card p-3 bbox">
                    <h5 className="card-title">Motilal Oswal Financial Services | 2022 - Present</h5>
                    <cite className="ps-2">-Advisor</cite>
                    <p className="card-body">
                    Coordinate and schedule meetings and conferences with internal and external share holders.Handle confidential information and documents with discretion and maintain their proper organization
                    </p>
                    </div>
                </div>
            
                <div className="col-lg-4">
                <div className="card p-3 bbox">
                <h5 className="card-title">Monottex Industries | 2021 - 2022</h5>
                    <cite className="ps-2">-Area Sales Manager </cite>
                    <p className="card-body">
                    Improved customer acquisition rates by 15% through targeted discussions on market segmentation and pricing strategies.
                    Identified strategic partnerships and gathered market information for competitive advantage.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-3 bbox">
                <h5 className="card-title">Silver Consumer Electricals Pvt.Ltd | 2020-2021</h5>
                    <cite className="ps-2">-Marketing Executive</cite>
                    <p className="card-body"> 
                    Communicate with target audiences and build and develop customer relationship.Maintain and update dealer database and arrange the effective dealer & distributors appointed.

                    </p>
                    </div>
                </div>
            </div>
            <div className="row work-experience">
                
                <div className="col-lg-4">
                    <div className="card p-3 bbox">
                <h5 className="card-title">Havells India Ltd | 2019-2020</h5>
                    <cite className="ps-2">-Service Engineer</cite>
                    <p className="card-body">
                    Troubleshooting Industrial Products(Change Over HV Panels). Troubleshoot Home Appliances, Switches, Greasers, Consumers Lightings, Industrial Lightings, Fans, and UG Cables.
                    </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-3 bbox">
                <h5 className="card-title">Acute Informatics Pvt.Ltd | 2018-2019</h5>
                    <cite className="ps-2">-Desktop Support EngineerLevel 2</cite>
                    <p className="card-body">
                    Responsible for managing service requests. Maintaining Mail backup & Migration process for IMAP to POP. Maintaining LAN, WAN and RJ45 Network.Maintaining  network infrastructure troubleshooting network issues.

                    </p>
                    </div>
                </div>
            </div>
            
        </div>

    </section>

        {/* ______________projects details____________     */}


        <section id='projects' className="projects">
            <div className="container">
                <div className="section-title">
                    <h3>Projects</h3>
                </div>
                <div className="row">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- HTML-CSS Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML%20-%20CSS%20/Resturant%20App/restaurant" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={restaurant} width={500} height={300} alt="Restarant app" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Restaurant App</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML%20-%20CSS%20/Theme%20Park%20App/html/home" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={themepark} width={500} height={300} alt="themepark" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Theme Park</h5>
                                </div>  
                         </div>
                </div>
                <div className="row mt-4">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- React Js Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://github.com/soniyaguruprakash/GSP-Adminside.git" target="_blank" rel="noreferrer">
                                    <img className="card-img-top" src={admin} width={500} height={300} alt="E-commerce adminside" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">E-commerce AdminSide</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://github.com/soniyaguruprakash/GSP-Userui.git" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={userui} width={500} height={300} alt="E-commerce userui" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">E-commerce Userui</h5>
                                </div>  
                        </div>
                </div>
                <div className="row mt-4">
                    <h5 className="fs-4 ms-1 fst-italic fw-bold">- JavaScript Projects</h5>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/To-Do-List/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={todolist} width={500} height={300} alt="todolist" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">To-do-list</h5>
                                </div>  
                        </div>
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Book%20Add%20App/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={notes} width={500} height={300} alt="notes_app" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Notes App</h5>
                                </div>  
                        </div>    
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Snake%20Game/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={game} width={500} height={300} alt="Snake Game" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Snake Game</h5>
                                </div>  
                        </div> 
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/english-dictionary/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={dictionary} width={500} height={300} alt="Dictionary" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">English dictionary</h5>
                                </div>  
                        </div> 
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Analog%20Clock/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={clock} width={500} height={300} alt="clock" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Digital Clock</h5>
                                </div>  
                        </div> 
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Age%20Calculator/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={age} width={500} height={300} alt="age calculator" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Age Calculator</h5>
                                </div>  
                        </div>  
                            <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/BMI%20Calculator/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={bmi} width={500} height={300} alt="BMI" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">BMI Calculator</h5>
                                </div>  
                        </div> 
                        <div className="col-lg-6">    
                            <div className="card p-4 bbox">
                                <a href="https://guruprakash93.neocities.org/HTML-CSS-JS/Basic%20Calculator/" rel="noreferrer" target="_blank">
                                    <img className="card-img-top" src={calc} width={500} height={300} alt="calculator" />
                                </a>
                                <h5 className="card-title pt-3 text-success fw-bold">Basic Calculator</h5>
                                </div>  
                        </div> 
                                       
                       
                    </div>
                    
            </div>

        </section>

         {/* ____________Tools and Technologies__________ */}

        <section id="skills">
        <div className="container">
            <div className="section-title">
                <h3>Tools & Technologies</h3>
            </div>
            <div className="row">
                <div className="col">
                            <h5>Front-End</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1'>HTML</button>
                                    <button className='btn btn-secondary ms-1'>CSS</button>
                                    <button className='btn btn-secondary ms-1'>JavaScript</button>
                                    <button className='btn btn-secondary ms-1'>ReactJS</button>
                                    <button className='btn btn-secondary ms-1'>Bootstrap</button>                            
                                </div>
                                <hr />
                                <h5>Back-End</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1'>NodeJS</button>
                                    <button className='btn btn-secondary ms-1'>ExpressJS</button>
                                    <button className='btn btn-secondary ms-1'>MongoDB</button>
                                </div>
                                <hr />
                                <h5>Database</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1'>MongoDB</button>
                                </div>
                                <hr />
                                <h5>Platforms</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1 '>Windows</button>
                                </div>
                                <hr />
                                <h5>IDEs/Text Editors</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1 '>Visual Studio Code</button>
                                </div>
                                <hr />
                                <h5>Version Control</h5>
                                <div className='btn-group'>
                                    <button className='btn btn-secondary ms-1 '>Git</button>
                                    <button className='btn btn-secondary ms-1 '>GitHub</button>                               
                                </div>                 
                                <hr />  
                </div>
            </div>
        </div>

        </section>
                           
                   
    </main>

    </>
    )
}

export default MyResume;