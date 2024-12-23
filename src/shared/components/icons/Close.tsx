import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Close: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='15.046' height='15.046' viewBox='0 0 15.046 15.046' {...props}>
      <path
        id='icons8-close'
        d='M6.052,4a.681.681,0,0,0-.484.2L4.2,5.568a.683.683,0,0,0,0,.967l4.988,4.988L4.2,16.511a.683.683,0,0,0,0,.967l1.368,1.368a.683.683,0,0,0,.967,0l4.988-4.988,4.988,4.988a.683.683,0,0,0,.967,0l1.368-1.368a.683.683,0,0,0,0-.967l-4.988-4.988,4.988-4.988a.683.683,0,0,0,0-.967L17.478,4.2a.683.683,0,0,0-.967,0L11.523,9.188,6.535,4.2A.681.681,0,0,0,6.052,4Z'
        transform='translate(-4 -4)'
        fill='#fff'
      />
    </SvgIcon>
  );
};
