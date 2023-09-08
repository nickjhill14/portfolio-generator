import { Home } from "@mui/icons-material";
import { Button, Container, Grid, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  AchievementInfo,
  EducationInfo,
  ExperienceInfo,
  ProjectInfo,
  SkillInfo,
} from "../../domain";
import { AchievementsSection } from "../../sections/achievementsSection/AchievementsSection";
import { EducationSection } from "../../sections/educationSection/EducationSection";
import { ExperienceSection } from "../../sections/experienceSection/ExperienceSection";
import { ProjectsSection } from "../../sections/projectsSection/ProjectsSection";
import { SkillsSection } from "../../sections/skillsSection/SkillsSection";

const CvPageContainer = styled(Container)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const GoHomeButton = styled(Button)({
  margin: "25px;",
  alignSelf: "flex-start",
});

type CvPageProps = {
  experienceInfo: ExperienceInfo;
  educationInfo: EducationInfo;
  achievementsInfo: AchievementInfo;
  projectInfo: ProjectInfo;
  skillsInfo: SkillInfo;
};

function CvPage({
  experienceInfo,
  educationInfo,
  achievementsInfo,
  projectInfo,
  skillsInfo,
}: CvPageProps) {
  const navigate = useNavigate();

  return (
    <CvPageContainer>
      <GoHomeButton
        onClick={() => navigate("/")}
        role="link"
        startIcon={<Home />}
        variant="contained"
      >
        Go Home
      </GoHomeButton>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ExperienceSection experienceInfo={experienceInfo} />
        </Grid>
        <Grid item xs={6}>
          <EducationSection educationInfo={educationInfo} />
        </Grid>
        <Grid item xs={6}>
          <AchievementsSection achievementInfo={achievementsInfo} />
        </Grid>
        <Grid item xs={6}>
          <ProjectsSection projectInfo={projectInfo} />
        </Grid>
        <Grid item xs={12}>
          <SkillsSection skillInfo={skillsInfo} />
        </Grid>
      </Grid>
    </CvPageContainer>
  );
}

export { CvPage };