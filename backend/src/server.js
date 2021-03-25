const express = require('express');
const routes = require('./routes');

require('./database/index');

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () =>{
    console.log(`Server started on port: ${port}`);
});
