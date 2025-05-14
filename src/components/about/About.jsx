import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Sobre Nós</h2>

        <div className="about-block">
          <h3>Nossa História</h3>
          <p>
            Desde 2014, ajudamos varejistas de moda online a vender mais. A Sizebay nasceu para resolver um dos maiores desafios do setor: encontrar o tamanho certo.
          </p>
          <p>
            Unimos antropometria, moda, estatísticas e tecnologia para criar o Size & Fit – ferramenta que reduz trocas e aumenta a confiança na hora da compra.
          </p>
        </div>

        <div className="about-block">
          <h3>Como Impactamos</h3>
          <ul>
            <li><strong>Lojas:</strong> mais conversões, menos devoluções.</li>
            <li><strong>Consumidores:</strong> compras sem frustrações.</li>
            <li><strong>Fabricantes:</strong> insights que otimizam coleções.</li>
            <li><strong>Meio Ambiente:</strong> menos desperdício, menos impacto.</li>
          </ul>
        </div>

        <div className="about-block">
          <h3>Nossa Expertise</h3>
          <p>
            Atuamos na interseção entre moda, tecnologia e performance. IA, e-commerce, têxtil – unimos conhecimento técnico e visão estratégica para gerar resultados reais.
          </p>
        </div>

        <div className="about-block">
          <h3>Nossos Valores</h3>
          <ul>
            <li>Esteja pronto para guiar</li>
            <li>Mostre que se importa</li>
            <li>Abrace o desafio</li>
            <li>Valorize a singularidade</li>
            <li>Encante com eficiência</li>
          </ul>
        </div>

        <div className="about-block">
          <h3>Presença Global</h3>
          <p>
            Atendemos lojas em +60 países, com soluções em +30 idiomas. Nossos sistemas são seguros, escaláveis e em conformidade com as principais legislações de dados.
          </p>
          <p className="about-contact">
            Para mais informações sobre LGPD, seguros e nossa política de privacidade, escreva para <a href="mailto:privacy@sizebay.com">privacy@sizebay.com</a>.
          </p>
        </div>

        <div className="img-about">

        <img
        src="src/assets/mixMatch.svg"  
        alt="Tape Right"
        />
        <img
        src="src/assets/sizeFit.svg"  
        alt="Tape Right"
        />
        </div>
      </div>
    </section>
  );
}

export default About;
