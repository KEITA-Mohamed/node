const mongoose = require('mongoose');
const env = require(`../environment/${process.env.NODE_ENV}`)

exports.clientPromise = mongoose.connect(env.dbUrl)
                                .then((m)=>{
                                    console.log('connexion ok')
                                    return m.connection.getClient(); // Retourne le client MongoDB
                                })
                                .catch(err => console.log(' errr ',err));