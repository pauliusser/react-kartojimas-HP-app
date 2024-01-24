import styles from "./styles.module.css";

const TextCard = ({ text, isImportant, state, clickAction }) => {
  return (
    // <div className={`${styles.default} ${isImportant ? styles.active : styles.alert}`}>
    //   {text}
    // </div>
    <div
      onClick={
        clickAction
          ? clickAction
          : () => {
              console.log("click");
            }
      }
      className={`
    ${styles.default}
    ${state === "active" && styles.active}
    ${state === "warning" && styles.warning}
    ${state === "alert" && styles.alert}
    `}>
      {text}
    </div>
  );
};

export default TextCard;
