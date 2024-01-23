import styles from "./styles.module.css";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

const Characters = ({ characters, setCharacters }) => {
  const clickAction = (id) => {
    const filteredCharacters = characters.filter((char) => {
      return char.id != id;
    });
    setCharacters(filteredCharacters);
  };
  if (characters) {
    return (
      <div className={styles.charactersWrapper}>
        {characters.map((char) => {
          return (
            <div key={char.id}>
              <Card
                id={char.id}
                name={char.name}
                yearOfBirth={char.yearOfBirth}
                species={char.species}
                image={char.image}
                clickAction={clickAction}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.loaderWrapper}>
      <Spinner />
    </div>
  );
};

export default Characters;
