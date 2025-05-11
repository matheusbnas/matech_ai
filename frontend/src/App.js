import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setMobileMenuOpen(false);
      
      // Get the header height to offset the scroll position
      const headerHeight = document.querySelector('header').offsetHeight;
      
      // Calculate the position to scroll to
      const offsetPosition = element.offsetTop - headerHeight;
      
      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-700">Matech.AI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-700 hover:text-blue-600 transition">Início</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-blue-600 transition">Quem Somos</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-700 hover:text-blue-600 transition">Serviços</a>
            <a href="#success-cases" onClick={(e) => { e.preventDefault(); scrollToSection('success-cases'); }} className="text-gray-700 hover:text-blue-600 transition">Casos de Sucesso</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-700 hover:text-blue-600 transition">Contato</a>
          </nav>
          <div className="md:hidden">
            <button className="p-2 text-gray-700" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-lg mobile-menu">
            <nav className="flex flex-col space-y-4 py-2">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-700 hover:text-blue-600 transition">Início</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 hover:text-blue-600 transition">Quem Somos</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-700 hover:text-blue-600 transition">Serviços</a>
              <a href="#success-cases" onClick={(e) => { e.preventDefault(); scrollToSection('success-cases'); }} className="text-gray-700 hover:text-blue-600 transition">Casos de Sucesso</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-700 hover:text-blue-600 transition">Contato</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Transformando Dados em Inteligência de Negócios</h2>
            <p className="text-lg md:text-xl mb-8">
              Somos especialistas em soluções de Inteligência Artificial que impulsionam a transformação digital da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition text-center">
                Fale Conosco
              </a>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition text-center">
                Nossos Serviços
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
              alt="Matech.AI Innovation" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
              style={{maxHeight: '400px'}}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Quem Somos e Nossa História</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1650327034581-1711a15a5430" 
                alt="Matech.AI Team" 
                className="rounded-lg shadow-lg max-w-full h-auto mx-auto" 
                style={{maxHeight: '400px'}}
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Capacitar empresas a alcançar excelência operacional por meio da integração de tecnologias de Inteligência Artificial, promovendo inovação contínua e vantagem competitiva.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Visão</h3>
              <p className="text-gray-600 mb-6">
                Ser referência na aplicação de soluções de IA que transformam dados em insights estratégicos, contribuindo para o crescimento sustentável dos clientes.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Inovação Contínua:</strong> Investimento constante em pesquisa e desenvolvimento para oferecer soluções de ponta.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Colaboração:</strong> Trabalho conjunto com os clientes para entender suas necessidades e desenvolver estratégias eficazes.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Excelência:</strong> Comprometimento com a entrega de resultados mensuráveis e de alta qualidade.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções personalizadas em inteligência artificial para transformar sua operação e otimizar resultados.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chatbots Inteligentes</h3>
              <p className="text-gray-600">
                Desenvolvimento de assistentes virtuais que utilizam NLP e aprendizado de máquina para interações eficientes com clientes.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Agentes de IA</h3>
              <p className="text-gray-600">
                Automatização de tarefas complexas e tomada de decisões informadas para aumentar a eficiência operacional.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Automações em IA</h3>
              <p className="text-gray-600">
                Implementação de soluções que aumentam a eficiência e reduzem custos operacionais em diversos setores.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 text-blue-800 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Análises e Insights</h3>
              <p className="text-gray-600">
                Coleta e análise de dados para geração de insights acionáveis que orientam decisões estratégicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="success-cases" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Casos de Sucesso</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça alguns dos resultados que alcançamos para nossos clientes com nossas soluções de IA.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Otimização de Custos</h3>
                <p className="text-gray-600 mb-4">
                  Redução de 30% nos custos operacionais de uma empresa de varejo através da automação de análises de dados.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Varejo</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">30% Redução</span>
                </div>
              </div>
            </div>
            
            {/* Case 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aumento de Vendas</h3>
                <p className="text-gray-600 mb-4">
                  Impulsionamento de 45% nas vendas de uma empresa de serviços financeiros com a implementação de um chatbot personalizado.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Serviços Financeiros</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">45% Aumento</span>
                </div>
              </div>
            </div>
            
            {/* Case 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eficiência Operacional</h3>
                <p className="text-gray-600 mb-4">
                  Diminuição de 40% no tempo de resposta de uma empresa de tecnologia por meio de agentes de IA.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Tecnologia</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">40% Redução</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nosso Processo de Trabalho</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado para desenvolver soluções de IA que atendam às necessidades específicas do seu negócio.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row">
            <div className="text-center px-4 py-2 md:w-1/4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Análise</h3>
              <p className="text-gray-600">
                Avaliamos detalhadamente suas necessidades e objetivos de negócio.
              </p>
            </div>
            
            <div className="text-center px-4 py-2 md:w-1/4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Planejamento</h3>
              <p className="text-gray-600">
                Desenvolvemos um plano estratégico com soluções de IA adequadas.
              </p>
            </div>
            
            <div className="text-center px-4 py-2 md:w-1/4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Implementação</h3>
              <p className="text-gray-600">
                Nossa equipe especializada executa as soluções de forma ágil.
              </p>
            </div>
            
            <div className="text-center px-4 py-2 md:w-1/4">
              <div className="bg-blue-100 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Entrega</h3>
              <p className="text-gray-600">
                Fornecemos soluções personalizadas, garantindo resultados esperados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
            <p className="max-w-2xl mx-auto">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares com nossas soluções em inteligência artificial.
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="bg-blue-900 p-8 md:w-1/3 text-white">
                <h3 className="text-2xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Rio de Janeiro, RJ
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contato@matechai.com
                  </p>
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (21) 99999-9999
                  </p>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-2">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-200 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                      <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                    <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                  </div>
                  
                  <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Matech.AI</h2>
              <p className="max-w-xs text-gray-400">
                Transformando dados em inteligência de negócios para empresas inovadoras.
              </p>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gray-400 hover:text-white transition">Início</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-400 hover:text-white transition">Quem Somos</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white transition">Serviços</a></li>
                <li><a href="#success-cases" onClick={(e) => { e.preventDefault(); scrollToSection('success-cases'); }} className="text-gray-400 hover:text-white transition">Casos de Sucesso</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-400 hover:text-white transition">Contato</a></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white transition">Chatbots Inteligentes</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white transition">Agentes de IA</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white transition">Automações em IA</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-gray-400 hover:text-white transition">Análises e Insights</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Matech.AI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
