import "./resourceList.css"; 
import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { config } from "../../util/config"; 
import MaterialTable from "material-table";
import { Link, useHistory  } from "react-router-dom";

export default function ResourceList() {
  const url = `${config.apiURL}/getResources`;
  const history = useHistory();
  const [resourceData, setResourceData] = useState([]);
  useEffect(() => {
    axios.get(url).then((json) => setResourceData(json.data));
  }, []);
  const handleClickRow = (event, data) => {
    debugger;
  }
  return (
    <div class="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle">Resources List</h1>
        <Link to="/newResource">
          <button className="userAddButton">Create Resource</button>
        </Link>
      </div>
      <br />

      <MaterialTable
        title="Resource List"
        columns={[ 
          { title: 'Name', field: 'name' },
          { title: 'Location', field: 'location' },
          {
            title: 'Start date', field: 'startDate', type: 'date', dateSetting: {
              format: 'dd/mm/yyyy'
            }
          },
          { title: 'End date', field: 'endDate', type: 'date' },
          { title: 'Role', field: 'role' },
          { title: 'Status', field: 'isActive', render: rowData => (rowData.isActive ? "Active" : "Disabled") }
        ]}
        data={resourceData}
        actions={[
          {
            icon: "edit",
            iconProps: { fontSize: "small", color: "primary" },
            tooltip: "Edit Resource",
            onClick: (event, rowData) => history.push(`/resource/${rowData._id}`)
          }
        ]} 
        options={{
          sorting: true,
          actionsColumnIndex: -1
        }}
      />
    </div>
  );
}