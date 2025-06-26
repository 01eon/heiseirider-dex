import Card from "../Card/Card.component";

const CardList = ({krDataJSON}) => {
  return (
    <>
      {krDataJSON.map((kr) => {
        return <Card kr={kr} />
      })}
    </>
  );
};

export default CardList;
