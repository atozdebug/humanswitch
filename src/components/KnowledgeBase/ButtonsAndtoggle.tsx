import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ButtonsAndtoggle({ button1, button2 }) {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#335CFF",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <div className=" flex flex-col gap-6">
      <FormGroup className="">
        <Stack
          direction="row"
          spacing={1}
          className="items-baseline"
          alignItems="top"
        >
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <div>
            <h5 className="text-sm font-medium text-darkgray33">Active</h5>
            <span className="text-xs text-gray-dark font-normal">
              The support articles are visible on the website
            </span>
          </div>
        </Stack>
      </FormGroup>

      <div className="flex gap-2">
        <button className="w-fit px-8 py-1 rounded-lg border">{button1}</button>
        <button className="w-fit px-6 py-1 rounded-lg text-white bg-darkblue2">
          {button2}
        </button>
      </div>
    </div>
  );
}

export default ButtonsAndtoggle;
