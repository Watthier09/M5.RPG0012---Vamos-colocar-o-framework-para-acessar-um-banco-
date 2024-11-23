const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/seuBancoDeDados', options)
    .then(() => console.log('Conexão com o MongoDB estabelecida!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;
