const History = ({ rolls }) => {
  return (
    <ul>
      {
        rolls.map((roll, index) => <li key={index + 1}>{roll.firstRoll}/{roll.secondRoll}</li>)
      }
    </ul>
  );
};

export default History;
