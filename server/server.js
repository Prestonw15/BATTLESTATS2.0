import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql/index.js';
import auth from './utils/auth.js';
import db from './db/index.js';
import { authenticate } from '@xboxreplay/xboxlive-auth';
import path from 'path';

authenticate('prestonwatson.15@gmail.com', '')
	.then(console.info)
	.catch(console.error);

const app = express();
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const user = auth.authenticateToken(req);
    return { user };
  }
});
// const io = require ('socket.io')(server, {cors:{origin: "*"}})
await server.start();

// const io = require('socket.io')(5000)

// io.on('connection', socket => {
//   const id = socket.handshake.query.id
//   socket.join(id)

//   socket.on('send-message', ({ recipients, text }) => {
//     recipients.forEach(recipient => {
//       const newRecipients = recipients.filter(r => r !== recipient)
//       newRecipients.push(id)
//       socket.broadcast.to(recipient).emit('receive-message', {
//         recipients: newRecipients, sender: id, text
//       })
//     })
//   })
// })


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
server.applyMiddleware({ app });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}
db.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(
      `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
