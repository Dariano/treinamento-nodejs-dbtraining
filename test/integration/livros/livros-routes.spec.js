describe('ROUTER - LIVROS', () => {
    const Livros = models.Livros
    const livrosPadrao = {
        nome: 'cursos',
        descricao: 'descricao'
    }

    beforeEach(done => {
        Livros
            .destroy({ where: {}})
            .then(() => Livros.create(livrosPadrao))
            .then(() => done())
    });

    describe('GET /livros', () => {
        it('deve retornar uma lista de livros', (done) => {

            request
                .get('/livros')
                .end((err, res) => {
                    const [livro] = res.body
                    
                    expect(livro.nome).to.be.eql(livrosPadrao.nome)
                    expect(livro.descricao).to.be.eql(livrosPadrao.descricao)

                    done(err)
                })
        });
    });
});