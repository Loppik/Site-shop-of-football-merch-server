const router = require('express').Router();

router.get('/', (req, res) => { res.send('Access') });

module.exports = router;
