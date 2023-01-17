const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();


const basePath = path.join(__dirname,'../templates');

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/pdp.html`);
})

module.exports = router