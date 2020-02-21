// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    console.log(tweets);
    console.log(tweets[1].user);

    return (
        tweets.map((tweet) => {
        
                return <span>{tweet.text}</span>
        })
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = null; 

// CHALLENGE: Write a separate User component for use in the Tweet component
const User = null; 

// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = null;  

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly