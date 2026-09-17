# Iris Drinketeria

Versão estática para portfólio de um site desenvolvido para um cliente real: a Iris Drinketeria, marca de caipirinhas e serviços de open bar para eventos.

O projeto apresenta a marca, o cardápio e os eventos realizados. Esta cópia preserva o design e as interações do frontend, mas não inclui as integrações privadas do site de produção.

## Tecnologias

- HTML para a estrutura das páginas e validação dos campos.
- CSS para o layout responsivo, componentes e animações.
- JavaScript puro para o cardápio, galerias e comportamento do formulário.

Não há framework, backend, dependências npm ou etapa de build.

## Funcionalidades

- Layout adaptado para computador e celular.
- Cardápio com seleção de sabores e atualização de imagem e descrição.
- Galerias de eventos em modal, com fechamento por Escape e controle de foco.
- Perguntas frequentes e navegação entre seções.
- Formulário demonstrativo com campos condicionais, máscara de telefone e limite de convidados.
- Página de confirmação de simulação e página de privacidade.

O formulário **não envia nem armazena dados**. Após a validação nativa do navegador, o JavaScript abre `obrigado.html`, sem incluir os valores preenchidos na URL. Use dados fictícios. O botão fica desativado quando o JavaScript não é carregado.

## Estrutura

```text
.
|-- assets/
|   |-- brand/           # Logotipo e favicons
|   |-- cardapio/        # Imagens dos sabores
|   |-- css/styles.css  # Estilos e responsividade
|   |-- eventos/         # Fotografias das galerias
|   |-- icons/           # Ícones sociais
|   `-- js/main.js      # Interações da página
|-- index.html
|-- obrigado.html
|-- privacidade.html
|-- robots.txt
`-- sitemap.xml
```

## Executar

Abra `index.html` no navegador. Não é necessário instalar pacotes, configurar variáveis de ambiente ou iniciar um servidor. O link do site real é https://irisdrinketeria.com.br/

## Versão código público

Foram removidos funções serverless, webhooks, automações de planilhas, notificações, processamento de formulários, reCAPTCHA e scripts de rastreamento. Esta versão não precisa de tokens ou credenciais. Os contatos e links comerciais usam valores de exemplo.

Os metadados, o `sitemap.xml` e o `robots.txt` usam `https://example.com` como domínio demonstrativo. 

## Direitos de uso

A identidade visual, as fotografias e os nomes dos produtos pertencem aos respectivos titulares. Confirme a autorização do cliente e das pessoas retratadas antes de disponibilizar esses materiais em um repositório público. Esta cópia é destinada à apresentação do trabalho de desenvolvimento, não à operação comercial do cliente.
