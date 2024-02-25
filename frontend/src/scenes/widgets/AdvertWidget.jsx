import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import QRCode from 'qrcode.react';


const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Scan It
        </Typography>
        <Typography color={medium}>Connectify</Typography>
      </FlexBetween>
      <QRCode
       value="http://localhost:3000/home"
       size={230}
       level="H"
       bgColor="#fffff8"
       fgColor="#333333"
       />
      <FlexBetween>
        <Typography color={main}>Profile</Typography>
        <Typography color={medium}>Connectify.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Scan your QR Code and profile will be displayed in any application
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
