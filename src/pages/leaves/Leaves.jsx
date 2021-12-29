import "./leaves.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../assests/data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Leaves() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", width: 50 },
    {
      field: "Start Date",
      headerName: "Start Date",
      width: 160
    },
    {
      field: "End Date",
      headerName: "End Date",
      width: 160
    },
    {
      field: "Comment",
      headerName: "Comment",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="leavesEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="leavesDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    }
  ];

  return (
    <div className="leaves">
      <div className="leavesContainer">
        <h1 className="leavesTitle">Leave Summary</h1>
        <Link to="/leaveForm">
          <button className="leavesButton">Create</button>
        </Link>
      </div>
      <br />
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
