import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    image: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  }
];

const chanelListData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    image:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    href: "https://www.twitch.tv/alanzoka",
    image:
      "https://yt3.googleusercontent.com/ytc/AGIKgqMMrDvQMXO44uQnIi-g9Hx9Aad1AS_8_64Bl3Jm8A=s900-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Alanzoka"
  }
];

const socialListData = [
  {
    href: "",
    image: "/assets/instagram.svg",
    alt: "Instagram"
  },
  {
    href: "",
    image: "/assets/youtube.svg",
    alt: "Youtube"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          class="games-list"
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem href={item.href} image={item.image} alt={item.alt} />
            );
          })}
        </Section>

        <Section
          class="channel-list"
          title="Meus canais"
          subtitle="Lista de canais e transmissões que eu não perco"
        >
          {chanelListData.map(function (item) {
            return (
              <ListItem href={item.href} image={item.image} alt={item.alt} />
            );
          })}
        </Section>

        <Section
          class="social-list"
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem href={item.href} image={item.image} alt={item.alt} />
            );
          })}
        </Section>
      </main>

      {/* Incluir sections aqui */}
    </div>
  );
}
