import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Link } from "@nextui-org/react";

export const Footer = () => (
  <footer className="flex w-full justify-center" data-testid="footer">
    <Button
      as={Link}
      aria-label="Visit repo"
      href="https://github.com/nickjhill14/portfolio"
      isExternal
      color="primary"
    >
      <GitHubIcon />
    </Button>
  </footer>
);
