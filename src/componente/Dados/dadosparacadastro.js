import logo from '../img/logo.png';
import './dadosparacadastro.css';

function DadosCadastro() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar o formulário para o servidor e realizar o cadastro
    // Em seguida, exiba a mensagem de cadastro bem sucedido:
    alert("Cadastro realizado com sucesso! Veja mais vagas para você!");
    window.location.replace('/livre');
  }

  return (
    <div class="container" id="sendjobs">
      <main id="sendjobs-container" class="wrapper">
        <h1>Preencha o seu cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div class="input-box">
            <label>Nome do candidato<span class="required">*</span></label>
            <input type="text" name="jobtitle" placeholder="Insira o nome do candidato"/>
          </div>
          <div className="input-box">
            <label for="exampleFormControlInput1" class="form-label">Email </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>




          <div class="input-box">
            <label>Redes sociais  <span class="required">*</span></label>
            <input type="text" name="jobtitle" placeholder="Linkedin ou Github"/>
          </div>
          <div class="input-box">
            <label for="">Cadastre seu currículo</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
          </div>
          <div class="input-box">
            <label>Tipo de contratação <span class="required">*</span></label>
            <select name="jobtype">
              <option value="">Escolha uma opção</option>
              <option value="pj">PJ</option>
              <option value="clt">CLT</option>
              <option value="homeoffice">Home Office</option>
              <option value="freelancer">Free Lancer</option>
            </select>
          </div>
          <div class="d-grid gap-4 col-6 mx-auto">
            <button type="submit" class="btn btn-primary"><h3 class="branco">Enviar</h3></button>
          </div>
        </form>
      </main>
      <footer>
        <div className="wrapper">
          <div className="footer-box">
            <div className="company-footer">
              <img src={logo} alt="logo" />
              <h2>JobFinder</h2>
              <p>A maneira mais fácil de encontrar seu próximo emprego.</p>
            </div>
          </div>
          <div className="footer-box">
            <div className="articles-footer">
              <h2>Artigos recentes</h2>
              <ul className="footer-list footer-article-list">
                <li>
                  <a href="#">
                    Como conseguir o primeiro emprego em tempos de crise?
                  </a>
                  <span className="article-date">05 de fevereiro de 2023</span>
                </li>
                <li>
                  <a href="#">
                    Como conseguir o primeiro emprego em tempos de crise?
                  </a>
                  <span className="article-date">05 de fevereiro de 2023</span>
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
	</div>
        
      
    );
  }
  
  export default DadosCadastro;