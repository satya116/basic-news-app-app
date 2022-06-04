import { Box, styled } from "@mui/material";

import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";

const Container = styled(Box)(({ theme }) => ({
  width: "59%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

function App() {
  return (
    <>
      <Header />
      <InfoHeader />
      <Container>
        <Articles />
      </Container>
    </>
  );
}

export default App;
