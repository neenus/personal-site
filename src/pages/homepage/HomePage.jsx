import { createRef } from "react";
import { useSpring, animated } from "react-spring";
import useScroll from "../../hooks/useScroll";
import getStyles from "../../hooks/useStyles";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import About from "../../components/About.component";
import Title from "../../components/Title.component";
import Footer from "../../components/Footer.component";
import Contact from "../../components/ContactSection";
import { CardMedia, Box, Fab, useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const aboutRef = createRef();
  const scrollPosition = useScroll();

  const handlePagePosition = () => {
    if (scrollPosition < 150) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

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
        sx={styles.media}
        image="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
      >
        <div style={styles.overlay}>
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
            sx={{
              ...styles.btn,
              ...(scrollPosition > 150 ? styles.up : styles.down)
            }}
            onClick={handlePagePosition}
          >
            <DoubleArrowOutlinedIcon />
          </Fab>
        </div>
      </CardMedia>
      <About ref={aboutRef} />
      <Contact />
      <Footer />
    </animated.main>
  );
};

export default HomePage;
