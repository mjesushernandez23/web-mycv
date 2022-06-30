import { Button, List, ListItem, Typography } from "@mui/material";
import type { NextPage } from "next";

const stackList = [{ label: "ReactJs" }];

const Home: NextPage = () => {
  return (
    <div className="p-4 text-center">
      <Typography variant="h1" className="text-6xl text-center font-medium ">
        Bienvenido
      </Typography>
      <Typography variant="h3" className="text-2xl">
        Desarrolle esta aplicación con el fin de demostrar mis habilidades resolviendo problema de
        buscar trabajo.
      </Typography>
      <Typography variant="body1" className="mt-2">
        Utilizando el JAMSTACK con las siguientes tecnologías
        <br />
        <Button
          LinkComponent="a"
          variant="text"
          href="https://github.com/mjesushernandez23/web-mycv.git"
          target="_blank"
          rel="noreferrer"
        >
          enlace del repositorio GitHub
        </Button>
      </Typography>
      <List>
        {stackList.map(({ label }, index) => (
          <ListItem key={`stack-${index}`}>{label}</ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
