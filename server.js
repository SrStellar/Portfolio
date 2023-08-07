const server = require("express")
const app = server()
const path = require("path")
const ejs = require("ejs")

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(server.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'SrStellar - Inicio'});
});

app.get('/projetos', (req, res) => {
    res.render('projetos', { title: 'SrStellar - Projetos' })
})

app.get('/discord', (req, res) => {
  res.redirect('https://discord.com')
})

app.get('/email', (req, res) => {
  res.redirect('mailto:contato@srstellar.dev')
})

app.get('/contato', (req, res) => {
  res.redirect('mailto:contato@srstellar.dev')
})

app.get('/github', (req, res) => {
  res.redirect('https://github.com/SrStellar')
})
// Pagina de Erro 404
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Página não encontrada' });
  console.log("Um usuario tentou acessar uma pagina inexistente")
});

// Pagina de Erro 500
app.use((err, req, res, next) => {
  res.status(500).send('Algo ocorreu errado!');
  console.log(`[ ERRO ] | Um erro foi encontrado: \n ${err}`)
});

app.listen(5252, () => {
    console.log(`[WEB] | Servidor rodando na porta: 5252`);
});
  
module.exports = app;
