import logo from '../img/logo.png';
     
     
function Footer() {
    return (
     <footer> 
			<div class="wrapper">
				<div class="footer-box">
					<div class="company-footer">
                    <img src={logo} alt="logo"/>
						
						<h2>JobFinder</h2>
						<p>A maneira mais fácil de encontrar seu próximo emprego.</p>
					</div>
				</div>
				<div class="footer-box">
					<div class="articles-footer">
						<h2>Artigos rescentes</h2>
						<ul class="footer-list footer-article-list">
							<li>
								<a href="#">Como conseguir o primeiro emprego em tempos de crise?</a>
								<span class="article-date">05 de fevereiro de 2023</span>
							</li>
							<li>
								<a href="#">Como conseguir o primeiro emprego em tempos de crise?</a>
								<span class="article-date">05 de fevereiro de 2023</span>
							</li>
							<li>
								<a href="#">Como conseguir o primeiro emprego em tempos de crise?</a>
								<span class="article-date">05 de fevereiro de 2023</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="footer-box">
					<h2>Nos encontre nas redes sociais</h2>
					<ul class="footer-list">
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
			</div>
			<div class="footer-bottom">
				<div class="wrapper">
					<p>MissãoCertificado - 2023</p>
				</div>
			</div>
		</footer>
        );
    }
    
    export default Footer;