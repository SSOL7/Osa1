import react from "react";



function VotingCard({quote, incrementVoteCount}) {

  return (
    <div className="grid-container">
      <div>
        <span>{quote.name}</span>
        <button className="button" variant="success" onClick={() => incrementVoteCount(quote._id)}>
          Vote
        </button>
      </div>
      <h1>Vote count: {quote.votes}</h1>
    </div>
  );
}
export default VotingCard;