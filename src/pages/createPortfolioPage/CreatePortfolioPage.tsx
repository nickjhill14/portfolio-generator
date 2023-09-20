import { Home } from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateBasicInfoSection } from "../../components/createBasicInfoSection/CreateBasicInfoSection";
import { CreateCvSections } from "../../components/createCvSections/CreateCvSections";

function CreatePortfolioPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  const steps = ["Create basic info", "Create CV sections"];

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: theme.palette.primary.main,
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Button
            component={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
            role="link"
            startIcon={<Home />}
            variant="contained"
          >
            Go Home
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Create A Portfolio
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stepper>
            {steps.map((step, index) => {
              return (
                <Step key={step} active={index === activeStep}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          {activeStep === 0 ? <CreateBasicInfoSection /> : <CreateCvSections />}
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="end">
          {activeStep < steps.length - 1 && (
            <Button
              onClick={() => setActiveStep((previousStep) => previousStep + 1)}
              variant="contained"
              endIcon={<NavigateNextIcon />}
            >
              Next
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export { CreatePortfolioPage };
