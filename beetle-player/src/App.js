import React from "react";
import {
  Container,
  Fab,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  withStyles
} from "@material-ui/core";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@material-ui/icons";
import { ReactComponent as BeetleLogo } from './beetlelogo.svg';

const myClasses = (theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: "5pt",
    borderRadius: "14px",
    boxShadow: "none"
  },
  avatar: {
    height: "208px",
    width: "208px"
  },
  logo: {
    width: "85px",
    height: "auto"
  },
  button: {
    boxShadow: 'none'
  }
});

function App(props) {
  const { classes } = props;

  return (
    <div>
      <Container
        style={{ marginTop: "20pt", display: "flex", justifyContent: "center" }}
      >
        <Grid container direction="row" spacing={1}>
          <Grid item>
            <BeetleLogo />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">PLAYLIST</Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{ marginTop: "5pt", display: "flex", justifyContent: "center" }}
      >
        <Avatar
          className={classes.avatar}
          src="/avatar.png"
        />
      </Container>
      <Container style={{ marginTop: "5pt" }}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Fab size="medium" color="secondary" className={classes.button}>
              <SkipPrevious />
            </Fab>
          </Grid>
          <Grid item>
            <Fab color="primary" className={classes.button}>
              <Pause />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" color="secondary" className={classes.button}>
              <SkipNext />
            </Fab>
          </Grid>
        </Grid>
      </Container>
      <Container style={{ marginTop: "5pt", marginBottom: "20pt" }}>
        <Card key={1} className={classes.card}>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="subtitle1">
                  The Dark Side of the Beetle
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Pink Beetle
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Fab size="small" color="primary" className={classes.button}>
                    <PlayArrow />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card key={2} className={classes.card}>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Across The Galaxy</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  The Beetles
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Fab size="small" color="primary" className={classes.button}>
                    <PlayArrow />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card key={3} className={classes.card}>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="subtitle1">
                  Losing My Beetlegion
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  B.E.M.
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Fab size="small" color="primary" className={classes.button}>
                    <PlayArrow />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card key={4} className={classes.card}>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="subtitle1">
                  Sweet Beetle O’ Mine
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Beet ’n’ Roses
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Fab size="small" color="primary" className={classes.button}>
                    <PlayArrow />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card key={4} className={classes.card}>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={2}>
              <Grid item xs={10}>
                <Typography variant="subtitle1">Beetle Stardust</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  David Boweetle
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Box style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Fab size="small" color="primary" className={classes.button}>
                    <PlayArrow />
                  </Fab>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default withStyles(myClasses)(App);