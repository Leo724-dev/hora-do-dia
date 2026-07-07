# ⏰ Hora do Dia - Verificador de Horário Dinâmico

Este projeto é uma aplicação web interativa que detecta o horário atual do sistema e adapta a interface do usuário dinamicamente com base no período do dia (manhã, tarde ou noite).

## 📝 Sobre o Projeto

O foco principal é criar uma experiência visual adaptável e integrada ao tempo real:
- **Detecção Automatizada:** A aplicação utiliza o objeto `Date` nativo do JavaScript para capturar a hora exata do dispositivo do usuário no momento do acesso.
- **Mudança de Estado Visual:** Com base nas horas calculadas, o sistema altera de forma dinâmica o plano de fundo da página e a imagem exibida no card central.
- **Transição de Períodos:** Exibe uma estética limpa e minimalista correspondente ao momento do dia — ideal para ilustrar conceitos de manipulação do DOM e lógica condicional.

## 📸 Demonstração

Você pode visualizar o projeto online através do link: 👉 https://leo724-dev.github.io/hora-do-dia/

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da aplicação, contendo cabeçalho, container centralizado (`card`) e rodapé de autoria.
- **CSS3:** Estilização moderna com foco em centralização absoluta, sombras suaves (`box-shadow`), bordas arredondadas e manipulação dinâmica de cores de fundo do `body`.
- **JavaScript (ES6+):** Lógica condicional, manipulação de objetos de data e tempo (`new Date()`), e alteração em tempo real dos atributos de imagem (`src`) e textos do DOM.

## ✨ Funcionalidades

- [x] **Relógio Estático Dinâmico:** Apresentação imediata do horário exato de acesso do usuário.
- [x] **Adaptação Temática:** Alteração automática do background e imagens para representar manhã, tarde ou noite.
- [x] **Visual Clean e Minimalista:** Interface focada na clareza da informação, livre de distrações visuais.
- [x] **Responsividade:** Layout responsivo e centralizado, adaptando-se perfeitamente a telas de desktops, tablets e smartphones.
