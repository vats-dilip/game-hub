import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" `,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
