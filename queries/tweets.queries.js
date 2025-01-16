const Tweet = require('../database/models/tweet.model');

exports.getUserTweetsFormAuthorId = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author');
}
exports.getCurrentUserTweetsWithFollowing = (user) => {
    return Tweet.find({ author: { $in: [ ...user.following, user._id ] }}).populate('author');
}

exports.updateTweet = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, { $set: tweet }, { runValidators: true });
}


exports.getUserTweetsFormAuthorId = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author');
}


exports.getTweet = (tweetId) => {
    return Tweet.findOne({ _id: tweetId }).exec();
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.getTweets = () => {
    return Tweet.find({}).exec();
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}