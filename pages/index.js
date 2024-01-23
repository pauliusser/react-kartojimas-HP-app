import Header from "../components/Header/Header.jsx";
import Characters from "../components/Characters/Characters.jsx";
import Footer from "../components/Footer/Footer.jsx";
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

  return (
    <>
      <Header />
      <Characters characters={characters} setCharacters={setCharacters} />
      <Footer />
    </>
  );
};

export default Home;
