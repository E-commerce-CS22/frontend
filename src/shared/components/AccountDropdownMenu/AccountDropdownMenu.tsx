import { useTranslation } from "react-i18next";
import { Divider, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import React, { FC } from "react";
import { SignoutIcon } from "../icons";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const StyledMenuItem = styled(MenuItem)(() => ({
  width: 250,
  borderRadius: 0,
}));
type AccountDropdownMenuProps = MenuProps & {
  onLogout?: () => void;
  username: string;
  imgSrc?: string;
  items: Array<
    | {
        title: string;
        icon: ReactNode;
        onClick: () => void;
      }
    | { component?: ReactNode }
  >;
};

export const AccountDropdownMenu: FC<AccountDropdownMenuProps> = ({
  onLogout: handleLogout,
  username,
  items,
  ...props
}) => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const handleGoToProfile = () => {
    router.push("/profile");
  };
  return (
    <Menu
      PaperProps={{
        elevation: 0,
        sx: {
          boxShadow: "0px 7px 29px #64646F33",
          borderRadius: "10px",
        },
      }}
      transformOrigin={{ horizontal: "center", vertical: "top" }}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      {...props}
    >
      <Box
        sx={{
          width: 250,
          margin: "10px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "60px",
            width: "60px",
            boxShadow: "0px 7px 15px #64646FAA",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fafbfd",
            cursor: "pointer",
          }}
          onClick={handleGoToProfile}
        >
          <AccountCircle color="primary" />
        </Box>
        <Tooltip title={username} placement="top">
          <Typography
            // fontFamily="CoHeadlineTrial-Light"
            align="center"
            fontSize="16px"
            sx={{
              margin: "10px auto",
              paddingInline: 1,
              overflow: "hidden",
              width: 250,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {username}
          </Typography>
        </Tooltip>
      </Box>
      {items.map((item, key) => {
        if ("component" in item) {
          return item.component;
        }
        const {
          title,
          icon,
          onClick: handleClick,
        } = item as { title: string; icon: ReactNode; onClick: () => void };
        return (
          <StyledMenuItem key={key} onClick={handleClick}>
            {icon}
            <Typography fontSize={"14px"} sx={{ marginInline: "8px" }}>
              {title}
            </Typography>
          </StyledMenuItem>
        );
      })}

      {handleLogout && (
        <>
          <Divider
            sx={{
              marginInline: "4px",
            }}
          />
          <MenuItem
            sx={{
              borderRadius: 0,
              justifyContent: "center",
            }}
            onClick={handleLogout}
          >
            <SignoutIcon
              sx={{
                height: "19px",
                width: "19px",
              }}
            />
            <Typography fontSize={"14px"} sx={{ marginInline: "8px" }}>
              {t("Logout")}
            </Typography>
          </MenuItem>
        </>
      )}
    </Menu>
  );
};
// AccountDropdownMenu.defaultProps = {
//   onLogout: null,
//   imgSrc: null,
// };
