import Footer from 'componente/Footer/footer';
import './styles.css';
import ibmlogo from '../img/ibmlogo.png';
import googlelogo from '../img/googlelogo.png';
import linkedinlogo from '../img/linkedinlogo.png';
import facebooklogo from '../img/facebooklogo.png';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';



function Pages(){


    return(
        <div>
            
            <nav>
                <div>
                <i class="fas fa-bars btn-menumobile"></i>
                </div>
                </nav>
                    <div id="main-banner">
                    <div id="search-form">
                    <h1>A maneira mais fácil de encontrar seu novo emprego</h1>
                    <p>Conecte-se de forma gratuita as melhores empresas e consiga o emprego dos seus sonhos.</p>			
                    <form>
                    <input type="text" name="job" placeholder="Digite o cargo"/>
                    <select name="region">
                        <option value="">Todos os estados</option>
                    </select>
                    <select name="category">
                        <option value="">Categoria</option>
                    </select>
                    <input href="/jobs" type="submit" value="Pesquisar"/>
                </form>
            </div>
        </div>
        <main id="lastjobs-container" class="wrapper">
			<h1>Últimas vagas enviadas</h1>
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
                            <img src={linkedinlogo} alt="ibmlogo"/>  
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
			</ul>
			<div class="btnjobs-container">
				<a href="#" class="btn-jobs">Ver mais vagas</a>
			</div>
		</main>
        <section id="sendjobs-container">
			<div id="sendjobs-inner" class="wrapper">
				<h2>Envie uma vaga que será vista por milhares de candidatos</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<a href="#" class="light-btn">Enviar vaga</a>
			</div>
		</section>
		<section id="status-container" class="wrapper">
			<h2 class="title-center">Estatísticas do JobFinder</h2>
			<p class="p-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<div>
				<div class="status-box">
					<span class="status-qtd">150</span>
					<p class="status-text">Vagas abertas</p>
				</div>
				<div class="status-box">
					<span class="status-qtd">250</span>
					<p class="status-text">Candidatos contratados</p>
				</div>
				<div class="status-box">
					<span class="status-qtd">50</span>
					<p class="status-text">Empresas participantes</p>
				</div>
				<div class="status-box">
					<span class="status-qtd">550</span>
					<p class="status-text">Candidatos</p>
				</div>
			</div>
		</section>
		<section id="testmony-container">
			<div class="wrapper">		
				<h2>Veja o que os candidatos dizem</h2>
				<p class="p-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<div class="testmony-box">
					<p class="testmony-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<img src={avatar1} alt="avatar1"/>
					<p class="testmony-name">João</p>
				</div>
				<div class="testmony-box">
					<p class="testmony-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<img src={avatar2} alt="avatar2"/>
                    
					<p class="testmony-name">Maria</p>
				</div>
				<div class="testmony-box">
					<p class="testmony-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<img src={avatar3} alt="avatar3"/>
                    
					<p class="testmony-name">Pedro</p>
				</div>
				<div class="testmony-box">
					<p class="testmony-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<img src={avatar4} alt="avatar4"/>
                    
					<p class="testmony-name">Alexia</p>
				</div>
			</div>
		</section>
		<section id="blog-container" class="wrapper">
			<h2 class="title-center">Últimos artigos do nosso blog</h2>
			<p class="p-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<div class="article-box">
            <img src={blog1} alt="blog1"/>
				
				<h4><a href="#">Article title</a></h4>
				<p class="article-date">05 de Fevereiro de 2019 | 10 comentários</p>
				<p class="article-resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href="#" class="article-btn light-btn">Ler post</a>
			</div>
			<div class="article-box">
            <img src={blog2} alt="blog2"/>
				
				<h4><a href="#">Article title</a></h4>
				<p class="article-date">05 de Fevereiro de 2019 | 10 comentários</p>
				<p class="article-resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href="#" class="article-btn light-btn">Ler post</a>
			</div>
			<div class="article-box">
            <img src={blog3} alt="blog3"/>
				<h4><a href="#">Article title</a></h4>
				<p class="article-date">05 de Fevereiro de 2019 | 10 comentários</p>
				<p class="article-resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href="#" class="article-btn light-btn">Ler post</a>
			</div>
		</section>
		<Footer/>
	</div>

    )

}

export default Pages;