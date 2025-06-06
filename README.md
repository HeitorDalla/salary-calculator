# Calculadora de Aumento de Salário
Este projeto é uma calculadora simples desenvolvida para calcular o valor e o percentual de aumento entre dois salários: o salário antigo e o novo salário informado pelo usuário.

## Tecnologias utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML** – Estruturação da página ([https://html.com](https://html.com))
- **CSS** – Estilização da interface ([https://css.com](https://css.com))
- **JavaScript** – Lógica de cálculo e validação dos campos ([https://www.javascript.com](https://www.javascript.com))

## Visualização do Projeto
https://heitordalla.github.io/salary-calculator/

## Funcionalidades
- Entrada para digitar o salário antigo
- Entrada para digitar o novo salário
- Botão para realizar o cálculo
- Exibição do valor do aumento e do percentual correspondente
- Validação para garantir que os campos estejam preenchidos corretamente e com valores numéricos
- Alerta para campos vazios ou inválidos

## Como Usar
1. Abra o arquivo `index.html` em seu navegador.
2. Digite o salário antigo e o salário novo nos respectivos campos.
3. Clique no botão **“Calcular”**.
4. O sistema exibirá:
   - O valor do aumento
   - O percentual de aumento

## Lógica de Funcionamento
Ao clicar no botão “Calcular”, a função principal realiza os seguintes passos:

1. **Validação**: Garante que os campos estejam preenchidos e com valores numéricos válidos.
2. **Cálculo**:
   - Valor do Aumento = `salário novo - salário antigo`
   - Percentual do Aumento = `((salário novo * 100) / salário antigo) - 100`
3. Os resultados são exibidos em elementos da página (`#aumento` e `#percentualAumento`).

## Pré-requisitos
- Navegador moderno com suporte a JavaScript (Chrome, Firefox, Edge, Safari etc.)

## Contribuindo
Este projeto é aberto para melhorias e sugestões. Contribuições são bem-vindas!  
Relate bugs, envie melhorias ou ideias via pull request ou e-mail.

## Contato
- Criado por **Heitor Giussani Dalla Villa**  
- E-mail: [heitorvillavilla@gmail.com](mailto:heitorvillavilla@gmail.com)  
- LinkedIn: [https://www.linkedin.com/in/heitordallavilla](https://www.linkedin.com/in/heitordallavilla)

## Observações Finais
- Os valores devem ser inseridos sem símbolos como "R$" ou separadores de milhar.
- A validação básica garante que apenas números sejam aceitos, mas melhorias como formatação automática podem ser implementadas.
- Projeto inspirado no <a href="https://www.udemy.com/course/curso-de-javascript-html-e-css-projetos-reais/">Curso de javascript</a>
