import './vagasCadastro.css';
import logo from '../img/logo.png';

function VagasCadastro() {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar o formulário para o servidor e realizar o cadastro
    // Em seguida, exiba a mensagem de cadastro bem sucedido:
    alert("Cadastro realizado com sucesso!");
    window.location.replace('/');
  }

  return (
    <div class="container" id="sendjobs">
      <main id="sendjobs-container" class="wrapper">
        <h1>Preencha os dados da Vaga</h1>
        <form onSubmit={handleSubmit}>
          <div class="input-box">
			<label>Título da vaga <span class="required">*</span></label>
			<input type="text" name="jobtitle" placeholder="Insira o título da vaga"/>
		</div>
		<div class="input-box">
			<label>Nome da Vaga<span class="required">*</span></label>
			<input type="text" name="jobtitle" placeholder="Insira o nome do candidato"/>
		</div>
		
		<div class="input-box">
			<label>Descrição da vaga <span class="required">*</span></label>
			<textarea name="description" placeholder="considerações sobre a entrevista e o candidato"></textarea>
		</div>
		<div class="input-box">
			<label>Sugestão de dia/hora para entrevista <span class="required">*</span></label>
			<input type="text" name="company" placeholder="Insira sua sugestão"/>
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
	</div>
        
      
    );
  }
  
  export default VagasCadastro;