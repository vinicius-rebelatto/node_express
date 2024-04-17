
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const db = require('./models');
//module.exports = app;
//Função para controlar a sincronização com o banco de dados
async function ApplyMigrations(){
    try{
        migration_config={
            create:true,
            alter:true
        };
    
        await db.sequelize.sync({
            alter: migration_config.alter
        });
        console.log('Sincronizado com susexo');
    }
    catch(error){
        console.log('Erro sincronizando o banco de dados')
    }
}

//Acionar a sincronização com o banco de dados
ApplyMigrations();

app.listen(8000, () => {
    console.log("Surubaaaa");
})