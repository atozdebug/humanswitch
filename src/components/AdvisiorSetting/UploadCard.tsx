import { BsFiletypePdf } from "react-icons/bs";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CloseIcon from "@mui/icons-material/Close";

// interface UploadCardProps {
//   data: Array;
//   setImageURL: (url: string) => void;
// }
//

const UploadCard = ({ data, discard }) => {
  console.log("🚀 ~ file: UploadCard.tsx:8 ~ UploadCard ~ data:", data);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // const timer = setInterval(() => {
    setProgress((oldProgress) => {
      if (oldProgress === 100) {
        return 0;
      }
      const diff = Math.random() * 20;
      return Math.min(oldProgress + diff, 100);
    });
    // }, 500);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {data.map((path) => (
        <div className="border p-2 rounded-lg">
          <div className="flex gap-2 items-center ">
            <span>
              <BsFiletypePdf className="!w-6 !h-6" />
            </span>
            <div className="flex justify-between w-full">
              <div className="flex flex-col ">
                <span>{path.name} </span>
                <span>speed </span>
              </div>
              <CloseIcon
                className="!w-4 !h-4 text-gray-dark cursor-pointer"
                onClick={() => {
                  const filter = data.filter((pat) => {
                    console.log("🚀 ~ file: UploadCard.tsx:49 ~ path:", pat);
                    return pat.name !== path.name;
                  });
                  console.log("🚀 ~ file: UploadCard.tsx:49 ~ filter:", filter);
                  discard(filter);
                }}
              />
            </div>
          </div>
          <span>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </span>{" "}
        </div>
      ))}
    </div>
  );
};

export default UploadCard;
