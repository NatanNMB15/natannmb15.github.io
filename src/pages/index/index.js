import React from "react";

import profileImg from "../../assets/images/profile.png";

export default function Index() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Natan De Macedo Barbosa</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImg}
              alt="Foto de perfil"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experiencia">
                Experiência
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#formacao">
                Formação Acadêmica
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Conhecimentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projetos">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#certificados">
                Certificados
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="sobre"
        >
          <div className="w-100">
            <h1 className="mb-0">
              Natan
              <span className="text-primary">&nbsp;De Macedo Barbosa</span>
            </h1>
            <div className="subheading mb-5">
              Brasil, Curitiba, Paraná - (41) 99760-1158 ·
              <a href="mailto:natanbarbosa15@gmail.com">
                natanbarbosa15@gmail.com
              </a>
            </div>
            <p className="lead mb-5 text-justify">
              Analista de tecnologia da informação e bacharel em sistemas de
              informação, motivado a obter conhecimentos na área da tecnologia
              da informação, desenvolvendo soluções na área, e progredir
              profissionalmente.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/natanbarbosa15/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/NatanNMB15"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experiencia"
        >
          <div className="w-100">
            <h2 className="mb-5">Experiência</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Analista de negócios em TI</h3>
                <div className="subheading mb-3">SENAI PR</div>
                <p className="text-justify">
                  Desenvolvedor Java 8 EE para Web, e Mobile utilizando React
                  Native.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  Julho de 2020 - Até o momento
                </span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Estagiário</h3>
                <div className="subheading mb-3">TUXNET IT Solutions</div>
                <p className="text-justify">
                  Auxiliar de desenvolvimento de Software OmniStack, Back-End
                  utilizando NodeJS, Front-End utilizando CSS3, HTML5 e
                  Javascript com o React, e Mobile com React Native e Expo.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  Maio de 2017 - Junho de 2019
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="formacao"
        >
          <div className="w-100">
            <h2 className="mb-5">Formação Acadêmica</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">
                  Faculdade de Ciências Sociais e Aplicadas do Paraná
                </h3>
                <div className="subheading mb-3">
                  Bacharel em Sistemas de Informação
                </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">2016 - 2019</span>
              </div>
            </div>
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">
                  Universidade Tecnológica Federal do Paraná (UTFPR)
                </h3>
                <div className="subheading mb-3">
                  MBA em Engenharia de Software
                </div>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">2021</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div className="w-100">
            <h2 className="mb-5">Conhecimentos</h2>

            <div className="subheading mb-3">
              Linguagens de programação &amp; Frameworks
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-java"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-python"></i>
              </li>
            </ul>

            <div className="subheading mb-3">Conhecimentos Gerais</div>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-check"></i>
                Mobile-First, Design Responsivo
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Gerenciamento e implantação de sistemas em Cloud
              </li>
              <li>
                <i className="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="projetos"
        >
          <div className="w-100">
            <h2 className="mb-5">Projetos</h2>
            <div className="subheading mb-3">Be The Hero</div>
            <p className="text-justify">
              O projeto Be The Hero foi criado pela Rocketseat na 11º edição da
              Semana Omnistack. Tendo o objetivo de criar um sistema Web e
              Mobile para ajudar ONGs (Organizações Não Governamentais)
              mostrando os casos que necessitam de ajuda.
            </p>
            <a
              href="https://be-the-hero-275300.web.app/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Link para o site
            </a>
          </div>
        </section>

        <hr className="m-0" />

        <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="certificados"
        >
          <div className="w-100">
            <h2 className="mb-5">Certificados</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                <span>
                  Oracle Certified Professional, Java SE 11 Developer – Oracle
                </span>
                <br />
                <a
                  href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=B65CF0E0DD697FB7E7D084A09A5512550BFC9D596B4ABAEB70F6F22A8CFDC6CE"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ver certificado
                </a>
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                <span>
                  Oracle Certified Foundations Associate, Java - Oracle
                </span>
                <br />
                <a
                  href="https://www.credly.com/badges/db7fed0e-58de-4a9b-b455-80addb8165c9?source=linked_in_profile"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ver certificado
                </a>
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                <span>
                  Remote Work and Virtual Collaboration (RWVCPC) - CertiProf
                </span>
                <br />
                <a
                  href="https://certificates.easy-lms.com/exam/session/88dc557a-507c-4adf-aa7c-5964656668c9"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ver certificado
                </a>
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                <span>
                  Scrum Foundation Professional Certificate (SPFC) - CertiProf
                </span>
                <br />
                <a
                  href="https://certificates.easy-lms.com/exam/session/1280421c-ae02-4722-bd95-827319520dc8"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ver certificado
                </a>
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                <span>
                  EF SET English Certificate 62/100 (C1-Advanced) - EF SET
                </span>
                <br />
                <a
                  href="https://www.efset.org/cert/f7wmLT"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Ver certificado
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
