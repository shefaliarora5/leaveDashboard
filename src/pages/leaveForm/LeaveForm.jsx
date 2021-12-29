import "./leaveForm.css";
import { useState } from "react";
import {Cities} from "../../../src/assests/data/resourceData";


export default function LeaveForm() {
    const change = () => {
        const value="N/A";
        return value;
      }
    const [value,setValue] = useState(change);

   
    function handleChange(e){
        setValue(e.target.value);
    };
    
    let selectOptions=Cities.cities.map(item => <option value="{item.Key}">{item.Value}</option>) 
  return (
    <div className="newLeave">
      <h1 className="leaveFormTitle">Apply Leave</h1>
      <form className="leaveFormForm">
        <div className="leaveFormItem">
          <label>Name</label>
            <select defaultValue={value} onChange={handleChange}>
                {selectOptions}
            </select>
            {/*<select onChange={(e) => this.handleCities(e)}>
              {Cities.cities && Cities.cities.map((e, key) => {
              return 
                <option key={key} value={e.Key}>{e.Value}</option>; })}
            </select>*/}  
        </div>
        <div className="leaveFormItem">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="leaveFormItem">
          <label>End Date</label>
          <input type="date" />
        </div>
        <div className="leaveFormItem">
          <label>Type</label>
            <select defaultValue={value} onChange={handleChange}>
                <option value="N/A">N/A</option>
                <option value="leave type 1">leave type 1</option>
                <option value="leave type 2">leave type 2</option>
                <option value="leave type 3">leave type 3</option>
                <option value="leave type 4">leave type 4</option>
            </select>
                     
        </div>
        <div className="leaveFormItem">
          <label>Day</label>
          <div className="dayType">
            <input type="radio" name="day" id="halfDay" value="0.5" />
            <label for="0.5">0.5</label>
            <input type="radio" name="day" id="fullDay" value="1" />
            <label for="1">1</label>
          </div>
        </div>
        <button className="leaveFormButton">Create</button>
        <div>
          
 </div>
        
      </form>
    </div>
  );
}