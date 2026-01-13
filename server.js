const app = require("./src/app");
const dotenv = require("dotenv");
dotenv.config();

const port=process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server has started at port:http://localhost:${port}`)
})