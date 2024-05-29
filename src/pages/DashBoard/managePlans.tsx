import { Card, Grid, Popover } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const data = [
  {
    name: "Basic Plan",
    editedAgo: "2 mins",
    users: "1-2 Users",
    endDate: "mm/dd/yyyy",
    price: "$99",
  },
  {
    name: "Professional Plan",
    editedAgo: "6 mins",
    users: "8-9 Users",
    endDate: "mm/dd/yyyy",
    price: "$26",
  },
  {
    name: "Premium Plan",
    editedAgo: "5 hrs",
    users: "100+ Users",
    endDate: "mm/dd/yyyy",
    price: "$129",
  },
];

const ManagePlans = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="px-10 py-8">
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={6}>
            <Card className="p-4">
              <div>
                <div className="flex justify-between">
                  <div>
                    <div>{item.name}</div>
                    <div>Edited {item.editedAgo} Ago</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>Default</div>
                    <div>Active</div>
                    <button
                      className="hover:bg-gray-200 rounded-full"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </button>
                    <Popover
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                    >
                      <div
                        className="px-3 py-3 hover:bg-gray-200 hover:cursor-pointer flex justify-center items-center gap-2 text-blue-700"
                        onClick={handleClose}
                      >
                        <EditIcon />
                        Edit
                      </div>
                      <div
                        className="px-3 py-3 hover:bg-gray-200 hover:cursor-pointer flex justify-center items-center gap-2 text-red-700"
                        onClick={handleClose}
                      >
                        <DeleteIcon />
                        Delete
                      </div>
                    </Popover>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <div>User</div>
                    <div>{item.users}</div>
                  </div>
                  <div>
                    <div>End Date</div>
                    <div>mm/dd/yyyy</div>
                  </div>
                  <div>
                    <div>Price</div>
                    <div>{item.price}</div>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManagePlans;
