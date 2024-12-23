import { SvgIcon, SvgIconProps } from "@mui/material";
import React, { FC } from "react";

export const Medication: FC<SvgIconProps> = props => {
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='15.214' height='19.439' viewBox='0 0 15.214 19.439' {...props}>
      <path
        id='icons8-list-view'
        d='M7,2V21.433H17.913a.422.422,0,0,0,.138,0h.108l.082-.082a.423.423,0,0,0,.078-.078l0,0,3.727-3.727a.423.423,0,0,0,.081-.081l.08-.08v-.1a.423.423,0,0,0,0-.138V2Zm.845.845H21.364V16.786h-3.8v3.8H7.845Zm2.535,3.8v.845h1.267V6.647Zm2.535,0v.845h5.914V6.647ZM10.38,9.182v.845h1.267V9.182Zm2.535,0v.845h5.914V9.182ZM10.38,11.717v.845h1.267v-.845Zm2.535,0v.845h5.914v-.845ZM10.38,14.251V15.1h1.267v-.845Zm2.535,0V15.1h5.914v-.845Zm5.492,3.38h2.36l-2.36,2.36Z'
        transform='translate(-7 -2)'
      />
    </SvgIcon>
  );
};
