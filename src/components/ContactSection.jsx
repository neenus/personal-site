import {
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  makeStyles
} from "@material-ui/core";
import Title from "./Title.component";
import ContactForm from "./ContactForm.component";

const useStyles = makeStyles(theme => ({
  grid: {
    [theme.breakpoints.up("md")]: {
      padding: "2em"
    }
  }
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        className={classes.grid}
      >
        <Grid item xs={12} md={3}>
          <Card
            square
            elevation={0}
            style={{
              minHeight: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "#212329",
              color: "#FFF"
            }}
          >
            <CardContent style={{ padding: "2em" }}>
              <Title
                variant="h4"
                message="Let's get in touch"
                className="subtitle"
              />
              <Typography variant="body2">
                You have work inquiry? Questions? or simply want to say hello
                because you're a good human being fill up this form or send an
                email to{" "}
                <Link href="mailto:hello@neenus.com" color="secondary">
                  hello@neenus.com
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card square elevation={0} style={{ minHeight: "100%" }}>
            <ContactForm />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
