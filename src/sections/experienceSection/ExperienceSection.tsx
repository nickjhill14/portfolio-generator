import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Alert } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { ExperienceInfo } from "../../domain";

type ExperienceSectionProps = {
  experienceInfo: ExperienceInfo;
};

function ExperienceSection({ experienceInfo }: ExperienceSectionProps) {
  return (
    <Section headingIcon={WorkOutlineOutlinedIcon} headingText="Experience">
      {experienceInfo.length === 0 ? (
        <Alert severity="warning">No experience details provided</Alert>
      ) : (
        experienceInfo.map(({ name, location, dateRange }) => (
          <SectionDetails
            heading={name}
            location={location}
            dateRange={dateRange}
            key={name}
          />
        ))
      )}
    </Section>
  );
}

export { ExperienceSection };