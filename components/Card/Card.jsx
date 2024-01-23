import styles from "./styles.module.css";
import blankImage from "../../images/blank_user.png";

const Card = ({ id, name, yearOfBirth, image, clickAction }) => {
  return (
    <div
      className={styles.card}
      onClick={() => {
        clickAction(id);
      }}>
      <h3>{name}</h3>
      <h5>{yearOfBirth}</h5>
      {image ? (
        <>
          <img src={image} />
        </>
      ) : (
        <>
          <img src={blankImage.src} />
        </>
      )}
    </div>
  );
};

export default Card;
