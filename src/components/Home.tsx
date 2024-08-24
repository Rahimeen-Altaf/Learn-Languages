import { Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "French",
    code: "fr",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Urdu",
    code: "ur",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const languageSelectHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography variant={"h3"} p={"2rem"} textAlign={"center"}>
        Welcome, Begin your learning.
      </Typography>

      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((i) => (
          <Button
            onClick={() => languageSelectHandler(i.code)}
            key={i.code}
            variant="contained"
          >
            {i.name}
          </Button>
        ))}
      </Stack>

      <Typography variant={"h6"} p={"2rem"} textAlign={"center"}>
        Choose a language to begin your learning journey.
      </Typography>
    </Container>
  );
};

export default Home;
