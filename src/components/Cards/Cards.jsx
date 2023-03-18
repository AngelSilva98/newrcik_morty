import Card from "../Card/Card.jsx";
import Style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={Style.container}>
      {characters.map((character) => (
        <Card
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          key={character.id}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
}
