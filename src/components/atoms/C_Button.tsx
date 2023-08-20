import { Button, SxProps, Theme, Typography } from "@mui/material";

interface BtnProps {
  label: string;
  btn_text_size?: string;
  cornerRadius?: number;
  btn_text_color?: string;
  color?: string;
  width?: string;
  height?: string;
  variant: "text" | "contained" | "outlined";
  size: "small" | "medium" | "large";
  marginLeft?: number;
  marginRight?: number;
  btn_color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  marginTop?: number;
  marginBottom?: number;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: SxProps<Theme>;

  onSubmit: () => void;
}

const C_Button = ({
  label,
  variant,
  btn_text_size,
  btn_text_color,
  btn_color,
  size,
  onSubmit,
  width,
  height,
  color,
  cornerRadius,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  style,
  startIcon,
  endIcon,
}: BtnProps) => {
  return (
    <>
      <Button
        sx={{
          width: width ? width : "20vw",
          height: height ? height : "4vh",
          bgcolor: color,
          color: "#fff",
          borderRadius: cornerRadius,
          ml: marginLeft,
          mr: marginRight,
          mt: marginTop,
          mb: marginBottom,
          ...style,
        }}
        color={btn_color}
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={() => onSubmit()}
      >
        <Typography
          fontFamily={["Arial"]}
          sx={{
            typography: {
              sm: "caption",
              xs: "caption",
              p: 2,
              color: { btn_text_color },
              fontSize: { btn_text_size },
            },
          }}
        >
          {label}
        </Typography>
      </Button>
    </>
  );
};

export default C_Button;
