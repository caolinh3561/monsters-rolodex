import Card from "../card/Card";
import "./styles.css";

const CardList = ({ monsters, className }) => {
  return (
    <div className={`card-list ${className}`}>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
