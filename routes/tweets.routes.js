const router = require('express').Router();
const { tweetList, tweetNew, tweetCreate, tweetDelete, tweetEdit, tweetUpdate } = require('../controllers/tweets.controller');

router.post('/update/:tweetId', tweetUpdate);
router.get('/edit/:tweetId', tweetEdit);
router.get('/', tweetList);
router.get('/new', tweetNew);
router.post('/', tweetCreate);
router.delete('/:tweetId', tweetDelete);

module.exports = router;