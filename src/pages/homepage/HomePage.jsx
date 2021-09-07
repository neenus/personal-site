import { createRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import DoubleArrowOutlinedIcon from "@material-ui/icons/DoubleArrowOutlined";
import About from "../../components/About.component";
import Title from "../../components/Title.component";
import Footer from "../../components/Footer.component";
const { CardMedia, makeStyles, Box, Fab } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  media: {
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100vh"
  },
  btn: {
    position: "absolute",
    bottom: "15%",
    left: "50%",
    transform: "translate(-50%, 50%)"
  },
  down: {
    "&>:nth-child(1)": {
      transition: "transform 0.75s ease-in-out",
      transform: "rotate(90deg)"
    }
  },
  up: {
    "&>:nth-child(1)": {
      transition: "transform 0.75s ease-in-out",
      transform: "rotate(-90deg)"
    }
  }
}));

const HomePage = () => {
  const classes = useStyles();
  const aboutRef = createRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handlePagePosition = () => {
    if (scrollPosition < 150) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
    config: {
      duration: 700
    }
  });
  return (
    <animated.main style={props}>
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
      >
        <div className={classes.overlay}>
          <Box
            minHeight="70vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="white"
          >
            <Title variant="h2" message="Neenus Gabriel" className="title" />
            <Title
              variant="h4"
              message="software developer"
              className="subtitle"
            />
          </Box>
          <Fab
            aria-label="down"
            variant="circular"
            className={`${classes.btn} ${
              scrollPosition > 150 ? classes.up : classes.down
            }`}
            onClick={handlePagePosition}
          >
            <DoubleArrowOutlinedIcon />
          </Fab>
        </div>
      </CardMedia>
      <About ref={aboutRef} />
      <Footer />
    </animated.main>
  );
};

export default HomePage;
