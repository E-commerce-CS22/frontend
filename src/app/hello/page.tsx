import { Box } from "@mui/material";

export default function Hello() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={2}
      padding={3}
    >
      Testing 2
    </Box>
  );
}
