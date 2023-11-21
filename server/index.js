const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
const db = require('./models')
const authRouter = require('./routes/auth');
const booksRouter = require('./routes/books');
const eventsRouter = require('./routes/events');
const usersRouter = require('./routes/members');
const reviewsRouter = require('./routes/reviews');


app.use('/auth', authRouter);
app.use('/books', booksRouter);
app.use('/events', eventsRouter);
app.use('/members', usersRouter);
app.use('/reviews', reviewsRouter);


db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Server is running on port 3001")
    });
});
