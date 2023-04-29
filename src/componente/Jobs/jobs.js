
import company from '../img/company.jpg';
import googlelogo from '../img/googlelogo.png';

import './jobs.css';




function Jobs() {
    
  return (
   
    <div class="container" id="jobpage">
		
		<div id="job-header">
			<h1>Developer</h1>
			<div id="job-info">
				<div class="job-type">
				  <span class="clt">CLT</span>
				</div>
				<div class="locality">
					<i class="fas fa-map-marker-alt"></i>
					<p>Mountain View, California</p>
				</div>
				<div class="date">
					<i class="far fa-calendar-alt"></i>
					<p>Enviada há 3 dias</p>
				</div>
			</div>
		</div>
		<div class="wrapper">
			<main id="job-container">
			    <div id="about-company-contaienr">
			    	<h2 class="page-title">Sobre a empresa</h2>
			    	<img src={company} id="company-img" alt="Como é o Google"/>
			    	<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus vel lectus aliquet tristique. Morbi interdum odio eget tellus mattis malesuada. Proin tempus magna ac lorem elementum efficitur. Aenean vitae elit ullamcorper, pharetra nisl sed, tempor nibh. Suspendisse feugiat nisl eu metus molestie, ac vulputate lorem finibus.</p>
			    </div>
			    <div id="about-job-container">
			    	<h2 class="page-title">Sobre a vaga</h2>
			    	<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus vel lectus aliquet tristique. Morbi interdum odio eget tellus mattis malesuada. Proin tempus magna ac lorem elementum efficitur. Aenean vitae elit ullamcorper, pharetra nisl sed, tempor nibh. Suspendisse feugiat nisl eu metus molestie, ac vulputate lorem finibus.</p>
			    </div>
			    <div id="min-requirements-container">
			    	<h2 class="page-title">Requisitos mínimos da vaga</h2>
			    	<ul class="jobpage-list">
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    	</ul>
			    </div>
			    <div id="job-benefits-container">
			    	<h2 class="page-title">Benefícios</h2>
			    	<ul class="jobpage-list">
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    		<li>Lorem ipsum dolor sit amet</li>
			    	</ul>
			    </div>
		    </main>

		    <aside id="companyinfo-container">
		      <img src={googlelogo}alt="Google logo"/>
		      <div class="job-type">
		        <span class="clt">CLT</span>
		      </div>
              <a>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus vel lectus aliquet 
                    tristique. Morbi interdum odio eget tellus mattis malesuada. Proin tempus magna ac lorem elementum efficitur. Aenean vitae elit ullamcorper, pharetra nisl sed, tempor nibh. Suspendisse feugiat nisl eu metus molestie, ac vulputate lorem finibus.
                
              </a>
                

				<a id="apply-btn" href="/">Candidatar-se</a>
		      <div class="companysocial-container">
		        <ul id="job-social-list">
		          <li>
		            <a href="#">
		              <i class="fab fa-facebook-square"></i>
		              <span>Facebook</span>
		            </a>
		          </li>
		          <li>
		            <a href="#">
		              <i class="fab fa-instagram"></i>
		              <span>Instagram</span>
		            </a>
		          </li>
		          <li>
		            <a href="#">
		              <i class="fab fa-linkedin"></i>
		              <span>Linkedin</span>
		            </a>
		          </li>
		        </ul>
		      </div>
		    </aside>
		</div>
		
    </div>

  );
}

export default Jobs;