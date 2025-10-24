import app from './src/app';

const PORT: string | undefined = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})