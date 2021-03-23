const express = require('express')


const app = express();

const rootCall= (req, res) => res.send('Thank You very much')


app.get('/', (req, res) =>{
        res.send('Thank You for calling Me')
})
  
  app.listen(4200, () => console.log('Listening to port 4200'))