"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";

// import { i18n } from "@/shared/utils/i18next";
// import { Stack, Button } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import Layout from "@/shared/components/Layout/Layout";

export default function Home() {
  return (
    <Box mt={10}>
      <Button variant="contained">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={"/signup"}
        >
          Sign UP
        </Link>
      </Button>
      <Button variant="contained">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={"/login"}
        >
          Login
        </Link>
      </Button>
      <Button variant="contained">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </Button>
    </Box>
  );
}
