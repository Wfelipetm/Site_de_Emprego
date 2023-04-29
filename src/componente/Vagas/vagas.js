import ibmlogo from '../img/ibmlogo.png';
import googlelogo from '../img/googlelogo.png';
import linkedinlogo from '../img/linkedinlogo.png';
import facebooklogo from '../img/facebooklogo.png';
import './vagas.css';
import Footer from 'componente/Footer/footer';






//function Botao() {
	//window.location.replace('/usuario');
  //}




function Usuario() {
    return (
		
      <div class="container" id="findjobs">
	{/* <button className="btn btn-primary btn-login" onClick={Botao}>Enviar vaga</button>*/}
	 
       <main id="lastjobs-container" class="wrapper">
			<h1>Busque a sua vaga</h1>
			<div id="job-filter">
				<div id="search-form">
					<form>
							<input type="text" name="job" placeholder="Digite o cargo"/>
							<select name="region">
								<option value="">Todos os estados</option>
							</select>
							<select name="category">
								<option value="">Categoria</option>
							</select>
							<input type="submit" value="Pesquisar"/>
						</form>
				</div>
				<div id="type-filter">
					<ul>
						<li>
							<input type="checkbox" checked/><label>CLT</label>
						</li>
						<li>
							<input type="checkbox" checked/><label>PJ</label>
						</li>
						<li>
							<input type="checkbox" checked/><label>Home Office</label>
						</li>
						<li>
							<input type="checkbox" checked/><label>Free Lancer</label>
						</li>
					</ul>	
				</div>
			</div>
			<ul>
				<li>
					<a href="/jobs" class="clickarea">
						<div class="company-box">
							<img src={googlelogo} alt="googlelogo"/>
							<div class="company-info">
								<h3>Developer</h3>
								<p>Google</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Mountain View, California</p>
						</div>
						<div class="job-type">
							<span class="clt">CLT</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={ibmlogo} alt="ibmlogo"/>
							<div class="company-info">
								<h3>DBA</h3>
								<p>IBM</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Armonk, New York</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={linkedinlogo} alt="linkedinlogo"/>
							<div class="company-info">
								<h3>Front End Developer</h3>
								<p>Linkedin</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Sunnyvale, California</p>
						</div>
						<div class="job-type">
							<span class="homeoffice">Home Office</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={ibmlogo} alt="ibmlogo"/>
							<div class="company-info">
								<h3>DBA</h3>
								<p>IBM</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Armonk, New York</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={ibmlogo} alt="ibmlogo"/>
							<div class="company-info">
								<h3>DBA</h3>
								<p>IBM</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Armonk, New York</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={linkedinlogo} alt="linkedinlogo"/>
							<div class="company-info">
								<h3>Front End Developer</h3>
								<p>Linkedin</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Sunnyvale, California</p>
						</div>
						<div class="job-type">
							<span class="homeoffice">Home Office</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={linkedinlogo} alt="linkedinlogo"/>
							<div class="company-info">
								<h3>Front End Developer</h3>
								<p>Linkedin</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Sunnyvale, California</p>
						</div>
						<div class="job-type">
							<span class="homeoffice">Home Office</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={facebooklogo} alt="facebooklogo"/>
							<div class="company-info">
								<h3>Full Stack Developer</h3>
								<p>Facebook</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Menlo Park, California</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={facebooklogo} alt="facebooklogo"/>
							<div class="company-info">
								<h3>Full Stack Developer</h3>
								<p>Facebook</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Menlo Park, California</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={ibmlogo} alt="ibmlogo"/>
							<div class="company-info">
								<h3>DBA</h3>
								<p>IBM</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Armonk, New York</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
				<li>
					<a href="#" class="clickarea">
						<div class="company-box">
							<img src={facebooklogo} alt="facebooklogo"/>
							<div class="company-info">
								<h3>Full Stack Developer</h3>
								<p>Facebook</p>
							</div>
						</div>
						<div class="locality">
							<i class="fas fa-map-marker-alt"></i>
							<p>Menlo Park, California</p>
						</div>
						<div class="job-type">
							<span class="pj">PJ</span>
						</div>
					</a>
				</li>
			</ul>
			<div class="btnjobs-container">
				<a href="#" class="btn-jobs">Carregar mais vagas</a>
			</div>
		</main>
		<Footer/>
	</div>
    
    );
  }
  
  export default Usuario;