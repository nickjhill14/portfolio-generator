import { render, screen } from "@testing-library/react";
import { buildAchievement } from "../../utils/builders";
import {
  AchievementSection,
  AchievementSectionProps,
} from "./AchievementSection";

function renderAchievementsSection(
  propsOverride?: Partial<AchievementSectionProps>,
) {
  const { name, icon, description } = buildAchievement();

  const props: AchievementSectionProps = {
    heading: name,
    icon,
    description,
    ...propsOverride,
  };

  render(<AchievementSection {...props} />);
}

describe(AchievementSection, () => {
  it("renders the section", () => {
    const { name: heading, icon, description } = buildAchievement();

    renderAchievementsSection({ heading, icon, description });

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("does not render a divider by default", () => {
    renderAchievementsSection();

    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders a divider when set to true", () => {
    renderAchievementsSection({ divider: true });

    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
