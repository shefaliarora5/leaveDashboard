import "./newResource.css";
import axios from "axios"; 
import { config } from "../../util/config"; 
import {  useHistory  } from "react-router-dom";
export default function NewResource() {
  const history = useHistory();
  const onSubmitRequest = (e) => {
    e.preventDefault();
    const reqData = { name: 'Sumit Kumar', startDate: new Date(), endDate: new Date(), location: 'US', claimHrs: 9, role: 'Fullstack' }
    axios.post(`${config.apiURL}/createResource`, reqData).then(result => { 
      if (result.status === 200) { 
        history.push('/resourceList');
      }
    }).catch(err => { debugger })
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Resource</h1>
      <form className="newUserForm" onSubmit={onSubmitRequest}> 
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div> 
        <div className="newUserItem">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="newUserItem">
          <label>End Date</label>
          <input type="date" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="New York" />
        </div> 
        <div className="newUserItem">
          <label>Claim Hours</label>
          <input type="number" placeholder="8 | 9" />
        </div> 
        <button className="newUserButton" type="submit" >Submit</button>
        <button className="cancelButton" type="cancel" onClick={() => { 
              history.push('/resourceList');
        }} >Cancel</button> 
      </form>
    </div>
  );
}
