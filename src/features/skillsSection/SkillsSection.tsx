import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { Alert, Chip, Divider, Rating, Stack } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SkillsInfo } from "../../domain/cv";

export type SkillsSectionProps = {
  skillsInfo: SkillsInfo;
};

export const SkillsSection = ({
  skillsInfo: { skills, languages },
}: SkillsSectionProps) => {
  return (
    <Section headingText="Skills">
      {skills.length === 0 ? (
        <Alert severity="warning">No skills provided</Alert>
      ) : (
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {skills.map(({ name }) => (
            <Chip label={name} variant="outlined" key={name} />
          ))}
        </Stack>
      )}
      <Divider />
      {languages.length === 0 ? (
        <Alert severity="warning">No languages provided</Alert>
      ) : (
        <Stack spacing={1}>
          {languages.map(({ name, level }) => (
            <Stack direction="row" key={name}>
              <p>{name}</p>
              <Rating
                name="read-only"
                value={level}
                icon={<CircleIcon />}
                emptyIcon={<CircleOutlinedIcon />}
                readOnly
              />
            </Stack>
          ))}
        </Stack>
      )}
    </Section>
  );
};
