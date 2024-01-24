import Header from "../components/Header/Header.jsx";
import TextCard from "../components/TextCard/TextCard.jsx";
import Characters from "../components/Characters/Characters.jsx";
import Footer from "../components/Footer/Footer.jsx";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const fetchedCharacters = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    await setTimeout(() => {
      setCharacters(fetchedCharacters.data);
    }, 2000);
    // console.log(fetchedCharacters.data);
  };
  // paklausti, kada naudoti useEffect?
  useEffect(() => {
    fetchCharacters();
  }, []);

  const [counter, setCounter] = useState(10);

  return (
    <>
      <Header />
      <div className={styles.cardWrapper}>
        {/* <TextCard text="important" isImportant={true} />
        <TextCard text="not important" isImportant={false} /> */}
        <TextCard
          text="increase"
          state="active"
          clickAction={() => {
            setCounter(counter + 1);
          }}
        />
        <TextCard
          text="decrease"
          state="warning"
          clickAction={() => {
            setCounter(counter - 1);
          }}
        />
        <TextCard text={counter} state="alert" />
      </div>
      <Characters characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default Home;
