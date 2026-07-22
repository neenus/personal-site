import {
  Avatar,
  Box,
  Typography,
  Button,
  ButtonGroup,
  useTheme
} from "@mui/material";
import { forwardRef, useState } from "react";
import { PopupModal } from "react-calendly";
import Title from "./Title.component";

const getStyles = theme => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "70vh",
    textAlign: "center"
  },
  container: {
    padding: theme.spacing(5),
    margin: theme.spacing(0, "auto"),
    maxWidth: theme.spacing(125)
  },
  large: {
    marginTop: theme.spacing(3),
    width: theme.spacing(15),
    height: theme.spacing(15),
    "&:hover": {
      boxShadow: "1px 1px 30px black",
      cursor: "pointer"
    }
  },
  btn: {
    marginTop: theme.spacing(3),
    minWidth: "10rem",
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff"
    }
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "center"
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15
  }
});

const calendlyOptions = {
  url: "https://calendly.com/neenusg/30min",
  pageSettings: {
    backgroundColor: "ffffff",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: "00a2ff",
    textColor: "4d5055"
  },
  utm: {
    utmCampaign: "Portfolio",
    utmContent: "Portfolio Contact",
    utmMedium: "Personal Portfolio Site",
    utmSource: "portfolio.neenus.com"
  }
};

const { url, pageSettings, utm } = calendlyOptions;

const CalendlyBtn = ({ url, pageSettings, utm }) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outlined"
        sx={styles.btn}
      >
        Schedule a Meeting
      </Button>
      <PopupModal
        url={url}
        pageSettings={pageSettings}
        utm={utm}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("root")}
      />
    </>
  );
};

const About = forwardRef((props, ref) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const handleClick = () => {
    // scroll all the way to the bottom of the page
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  return (
    <div id="about" style={styles.root} ref={ref}>
      <Box
        sx={styles.container}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Title variant="h4" message="About me" className="subtitle" />
        <Typography>
          Dynamic and motivated Software Developer with years of experience in
          full stack web development and a passion for creative problem solving.
          Dedicated life-long learner always eager to discover new things.
          <br />
          <br />
          Outside of work I try to enjoy my time with my beautiful family as
          much as I can because life is too short not to... if you want to know
          more about me buy me a beer and I'll tell you everything... just
          kidding you can get in touch by booking a time on my calendar or by
          filling out the contact form below but a beer would still be nice. 😜
        </Typography>
        <Avatar
          variant="circular"
          sx={styles.large}
          src={"/20170514_001355.jpg"}
          alt="A horrible headshot of myself"
          onClick={() =>
            alert(
              "I know quality of this image is horrible if you're a photographer or know anything about professional headshots I'd like to talk to you please 😀"
            )
          }
        />
        <ButtonGroup>
          <Button
            onClick={handleClick}
            variant="outlined"
            sx={styles.btn}
          >
            Contact Me!
          </Button>
          <CalendlyBtn url={url} pageSettings={pageSettings} utm={utm} />
        </ButtonGroup>
      </Box>
    </div>
  );
});

export default About;
