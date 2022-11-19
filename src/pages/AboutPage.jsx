import React from 'react'
import '../css/About.css'
import Img1 from "../images/indian- Rohith Gangaraju.png"
import Img2 from "../images/ruthvik.jpeg"
import Img3 from "../images/IMG-20220703-WA0070 - sai rajesh payala.jpg"
import Img4 from "../images/19BCN7015_BONDU MOHAN SRINIVASA SARMA - Mohan Srinivasa Sarma.jpeg"
import Img5 from "../images/sai vivek.jpeg"
import Img6 from "../images/default.png"
import Img7 from "../images/IMG_20210810_174114_186 - Likhith RS.jpg"
import Img8 from "../images/mera pic - Pavan Kalyan.jpg"
import Img9 from "../images/B404D015-3448-432C-B4A2-5A3017EFAA76 - Bharath Sai.jpeg"
import Img10 from "../images/SOMESULA ADARSH1 - Adarsh Somesula.jpg"
import Img11 from "../images/20211013_161206 - Koduri Gokul.jpg"
import Img12 from "../images/B612_20210510_183257_770~2 - vishnupriya Bellamkonda.jpg"
import Img13 from "../images/default.png"

const AboutPage = () => {
  return (
    <section class="AboutUs">
         <h2 class="team1" > Team</h2>
         <h3 class="team2"> Dedication. Expertise. Passion.</h3>
         <div class="container">
            <div class="cards">
               <div classname="profile-image">
                  <img src={Img1} alt="first user" className='imagePic' /> 
               </div>
               <div class="content">
                  <p class="About_profile_name">Rohith Gangaraju </p>
                  <h3 class="About_profile_position"> CEO & FOUNDER</h3>
                  <br/>
                  <br/>
                  <a  class="about_social_links"href="https://www.linkedin.com/in/rohithgangaraju/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:rohith@vielabs.in"><i class="about_icon fa-solid fa-envelope"></i>
                  </a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img src={Img2} alt="first user" className='imagePic' /> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> B S Ruthvik Mannepalli</p>
                  <h3 class="About_profile_position"> CEO & FOUNDER</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/mannepalli-bsruthvik-04b733196/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:ruthvik@vielabs.in"><i class="about_icon fa-solid fa-envelope"></i>
                  </a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img3} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name">Sai Rajesh Varma Payala</p>
                  <h3 class="About_profile_position"> CQO & CMO</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/rajesh-varma-payala-4302ba1a0%2F/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:rajesh@vielabs.in"><i class="about_icon fa-solid fa-envelope"></i>
                  </a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img4} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Mohan Srinivasa Sarma Bondu </p>
                  <h3 class="About_profile_position"> CSO</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/bondu-mohan-srinivasa-sarma-a95a44207/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a  class="about_social_links"href="mailto:mohan@vielabs.in"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img5} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Sai Vivek Rangaraju</p>
                  <h3 class="About_profile_position"> ACSO</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/sai-vivek-rangaraju-9070a0b9/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a  class="about_social_links" href="mailto:saivivek899@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img6} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Nivas</p>
                  <h3 class="About_profile_position"> SDE</h3>
                  <br/>
                  <br/>
                  <a  class="about_social_links" href="https://www.linkedin.com/in/nivas-manduva-03b8905b/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a  class="about_social_links" href="mailto:manduva.nivas@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img7} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> R S Likhith Sai </p>
                  <h3 class="About_profile_position"> Marketing Manager </h3>
                  <br/>
                  <br/>
                  <a  class="about_social_links" href="https://www.linkedin.com/in/likhith-sai-a14a80184/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a  class="about_social_links" href="mailto:likhithsairoyal@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img8} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Pavan Kalyan Akula</p>
                  <h3 class="About_profile_position"> Marketing Executive</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/pavan-kalyan-55644220a/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:akulapavankalyan005@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img9} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name">Inturi Bharath Sai</p>
                  <h3 class="About_profile_position"> Editor</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/bharath-sai-36292024b/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:bharath.21bce7099@vitapstudent.ac.in"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img10} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Adarsh Somesula</p>
                  <h3 class="About_profile_position">Accounting Supervisor</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/adarsh-somesula-2bb17b18a/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:adarsh.somesula2000@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img11} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Gokul Koduri</p>
                  <h3 class="About_profile_position"> Accountant </h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/koduri-gokul-0ab488196/"><i class=" about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:kodurigokul@gmail.com"><i class=" about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img12} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name"> Vishnu Priya Bellamkonda</p>
                  <h3 class="About_profile_position"> Tutor</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/in/vishnubellamkonda/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:vishnupriyabellamkonda2002@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
            <div class="cards">
               <div class="profile-image">
                  <img className='imagePic' src={Img13} alt="first user"/> 
               </div>
               <div class="content">
                  <p class="About_profile_name">Bharat Sai Gopishetti</p>
                  <h3 class="About_profile_position"> Tutor</h3>
                  <br/>
                  <br/>
                  <a class="about_social_links" href="https://www.linkedin.com/company/wix-com/"><i class="about_icon fa-brands fa-linkedin-in"></i></a>
                  <a class="about_social_links" href="mailto:gopishetti.bharath@gmail.com"><i class="about_icon fa-solid fa-envelope"></i></a>
               </div>
            </div>
         </div>
      </section>
  )
}

export default AboutPage