import React from 'react';
import './App.css';
// import project1Image from './images/Project1.png';
// import project2Image from './images/Project2.png';
// import project3Image from './images/Project3.png';
import project4Image from './images/White.png';


function App() {
  const htmlCode = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Events</title>
      <link rel="stylesheet" href="style.css">
     </head>
  <body>  
          
      <nav class="bg-deepBlue ">
          <div class="navu">
  
              <a href="/" class="navi">
                  <img class="inx" 
                  url('./images/White.png')
              </a>
              
              <ul class="unorder">
                  <li class="itemz">
                      <a href="#" class="yo">Project</a>
                      <div class="underline"></div>
                  </li>
                  <li class="itemz">
                      <a href="#" class="yo" >Blog</a>
                      <div class="underline"></div>
                  </li>
                  
                  <li class="itemz group">
                      <a href="#" class="yo" >Events</a>
                      <div class="underline"></div>
                  </li>
                  <li class="itemz">
                      <a href="#" class="yo" >Webinar</a>
                      <div class="underline"></div>
                  </li>
                 
              </ul>
              <div class="btns">
                <button class="login">Log in</button>
                <button class="signup">Sign Up</button>
              </div>
  
            </div>
      </nav>    
      <div class="maincont"> <div class="project-section">
              <h2 class="page-header" id="projectss">Wlcome to Events Page</h2>
              <div class="eventlist">
                  <ul class="gridi">
                  <h2 class="page-header" id="projects">Events</h2>
                      <a href="#project1"><li>Compete with Your Peers!</li></a>
                      <a href="#project2"><li>Becoming a MERN Devloper</li></a>
                      <a href="#project3"><li>Prize Distribution.</li></a>
                      <a href="#project4"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                      <a href="#project1"><li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li></a>
                  </ul>
              </div>
            
              <div class="project-card" id="project1">
                  <div class="project-number project-number-right">01</div>
                  <div class="project-content project-content-left">
                      <div class="project-heading">Compete with Your Peers - Become a Top-Notch Developer!</div>
                      <div class="project-subheading">
                          <P>In today's fast-paced and competitive tech industry, the demand for skilled developers is soaring. As a developer, it's essential to continuously improve your skills, stay updated with the latest technologies, and challenge yourself to reach new heights. One effective way to achieve this is by engaging in healthy competition with your peers. Competing with fellow developers can be a powerful motivator that pushes you to excel, learn, and grow as a professional.</P>
                      </div>
                      <div class="btn-grp">
                          <a href="#nav0"><span class="btn-pink btn-project"> Click </span></a>
                          
                          <a href="">
                              <i title="Live Link"   class="fa-solid fa-link icon"></i>
                          </a>
                      </div>
                      <div class="expandable" id="nav0">
                          <p>DATE:30/02/2030<br>
                          TIME:12:12<br>
                          TRAINER:<br>
                          FEES:0 </p>
                      </div>
                  </div>
              </div>    
              <div class="project-card" id="project2">
                      <div class="project-number project-number-left">02</div>
                      <div class="project-content project-content-left">
                          <div class="project-skills-container">           
                              <img class="project-skill" src="./images/NextJsCircle.png" alt=""/>
                              <img class="project-skill" src="./images/Tailwind.png" alt=""/>        
                              <img class="project-skill" src="./images/Vercel.svg" alt=""/>
                          </div>
                          <div class="project-heading">Becoming a MERN Devloper</div>
                          <div class="project-subheading">
                          <P>Becoming a MERN (MongoDB, Express, React, Node.js) developer is an exciting and rewarding journey in the world of web development. MERN is a popular full-stack development stack that allows you to build powerful and dynamic web applications.</P>
                          </div>
                          <div class="btn-grp">
                              <button class="btn-pink btn-project">Read More</button>
                              <a href="">
                                  <i title="GitHubLink" class="fa-brands fa-github icon"></i>
                              </a>
                              <a href="">
                                  <i title="Live Link" class="fa-solid fa-link icon"></i>
                              </a>
                          </div>
                      </div>
                  </div>   
                  <div class="project-card" id="project3">
                      <div class="project-number project-number-right">03</div>
                      <div class="project-content project-content-right">
                          <div class="project-heading">Prize Distribution</div>
                          <div class="project-subheading">
                          Prize Distribution is a significant event that takes place in various competitions, tournaments, contests, and ceremonies to honor and reward individuals or teams for their exceptional performances, achievements, and accomplishments. It is a moment of celebration and recognition, where participants who have excelled in their respective fields are acknowledged and appreciated for their hard work, dedication, and talent.
                          </div>
                          <div class="btn-grp">
                              <button class="btn-pink btn-project">Read More</button>
                              <a href="">
                                  <i title="GitHubLink" class="fa-brands fa-github icon"></i>
                              </a>
                              <a href="">
                                  <i title="Live Link" class="fa-solid fa-link icon"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="project-card" id="project4">
                      <div class="project-number project-number-left">04</div>
                      <div class="project-content project-content-left">
                          <div class="project-skills-container">           
                              <img class="project-skill" src="./images/NextJsCircle.png" alt=""/>
                              <img class="project-skill" src="./images/Tailwind.png" alt=""/>        
                              <img class="project-skill" src="./images/Vercel.svg" alt=""/>
                          </div>
                          <div class="project-heading">Intern Nexus</div>
                          <div class="project-subheading">
                          Intern Nexus is a dynamic and innovative company that specializes in connecting businesses with talented interns and providing comprehensive training programs for aspiring students. As a leading intermediary in the internship and training space, Intern Nexus plays a crucial role in bridging the gap between companies seeking skilled interns and students eager to gain practical experience in their chosen fields.
                          </div>
                          <div class="btn-grp">
                              <button class="btn-pink btn-project">Read More</button>
                              <a href="">
                                  <i title="GitHubLink" class="fa-brands fa-github icon"></i>
                              </a>
                              <a href="">
                                  <i title="Live Link" class="fa-solid fa-link icon"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
          <div class="contactus-form-container">
              <div class="container">
                  <h1 class="contactus-heading" id="contactme">Contact Me</h1>
                  <h3 class="contactus-sub-heading">
                      Questions, thoughts,or just want to say hello?
                  </h3>
  
                  <div class="contactus-form-container">
                      <form class="form" action="">
                          <div class="form-field-container">
                              <input class="formfield"
                              type="text"
                              name="name"
                              id=""
                              placeholder="Enter your Name"/>
      
                              <input class="formfield"
                              type="email"
                              name="email"
                              id=""
                              placeholder="Enter your Email Address"/>
                          
                              <input class="formfield"
                              type="text"
                              name="subject"
                              id=""
                              placeholder="Enter your Subject"/>
  
                              <textarea name="message" 
                              id="" cols="30" rows="10"
                              class="formfield formfield-textarea"
                              placeholder="Enter your Message"></textarea>
  
                          </div>
  
                          <div>
                              <button type="submit" class="btn-pink" id="submit-btn">
                                  Send Message <i class="submit-icon fa-solid fa-paper-plane"></i>
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
  
          <footer>
          </footer>
  
      </div>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
    </script> 
    <!-- <script>
       
      var typeData = new Typed(".role", {
          strings: [
            "Full Stack Developer",
            "Web Developer",
            "UI-UX Designer",
            "Backend Developer",
            "Coder",
          ],
          loop: true,
          typeSpeed: 100,
          backSpeed: 80,
          backDelay: 1000,
        });
      
    </script> -->
  </body>
  </html>`;

  return <div dangerouslySetInnerHTML={{ __html: htmlCode }} />;
}

export default App;
