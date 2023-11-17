import { Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" `,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
