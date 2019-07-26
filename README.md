# starter-theme

- Template de início rápido para desenvolvimento de sites e landing pages

# Instalação
-------------------
Certifique-se que tenha a ultima versão do NodeJS e NPM, e então, execute o comando abaixo
```
npm install
```
### Como usar
Após o comando acima rode o comando gulp, este comando irá compilar o css e javascript,
e ficará assistindo todas as alterações nos diretórios e executará uma tarefa de acordo com a alteração
```
gulp
```

# Icones
Para gerar o font do novo icone apenas coloqueo dentro do diretório `assets/svg` lembrando que o nome do arquivo
será a classe a ser ultilizada para chamar o icone precedido por icon- , conforme exemplo abaixo.
```
assets/svg/seta-direita.svg

<span class="icon-seta-direita"></span>
```

# Imagens
Todas as imagens que forem colocadas dentro do diretório `assets/images` será gerada uma nova imagem com a extensão .webp
conforme [documentação](https://developers.google.com/speed/webp/), como alguns navegadores não suportam esse novo formato
é interessante que as imagens passem a ser chamadas da seguinte maneira:
```
<picture>
    <source srcset="assets/images/nome-image.webp" type="image/webp">
    <source srcset="assets/images/nome-image.png" type="image/png"> 
    <img src="assets/images/nome-image.jpg" alt="Alt Text!">
</picture>
```
