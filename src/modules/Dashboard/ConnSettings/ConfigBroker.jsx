import React, { useState } from 'react'
import generateID from '../../HelperFunctions/generateClientId'

const ConfigBroker = () => {
  const [randId, setRandId] = useState("");

  let getID = true;

  const getClientId = ({target}) => {
    if(target.checked){
      console.log("hi there")
    }
    getID = true;
    const randomId = generateID();
    setRandId(randomId);
    getID = false;
  }

  return (
    <div className=''>
        
        <div className='m-4'>
        <div className='row my-5'>
        <h2 className='col'>Configure Connection</h2>
        <button type="button" className="btn btn-success col-md-3 col-lg-2">Connected</button>
        </div>
        <form>
          <fieldset className='border p-2 my-2'>
            <legend className='col'>Connection</legend>
            <div className="form-group row">
                <div className="col-md-6" >
                <label htmlFor="host" className="col col-form-label">Host or IP</label>
                <div className="col">
                <input type="text" className="form-control" id="host" placeholder="Host or IP Address" />
                </div>
                </div>

                <div className="col-md-4" >
                <label htmlFor="port" className="col col-form-label">Port</label>
                <div className="col">
                <input type="number" className="form-control" id="port" placeholder="5000" />
                </div>
                </div>

                <div className="col-md-2" >
                <label htmlFor="timeout" className="col col-form-label">Timeout</label>
                <div className="col">
                <input type="number" className="form-control" id="timeout" placeholder="Timeout" />
                </div>
                </div>
            </div>
          
            <div className="form-group row">
                <div className="col-md-6" >
                <label htmlFor="protocol" className="col col-form-label">Protocol</label>
                <div className="col">
                  <select className="form-select" defaultValue={"TCP"} aria-label="Select protocol">
                  <option value="tcp">TCP</option>
                  <option value="ssl">SSL</option>
                  </select>
                </div>
                </div>
            </div>
          
            <div className="form-group row">
                <div className="col-md-6" >
                <label htmlFor="username" className="col col-form-label">Username</label>
                <div className="col">
                <input type="text" className="form-control" id="username" placeholder="Enter Username" />
                </div>
                </div>
                <div className="col-md-6" >
                <label htmlFor="password" className="col col-form-label">Password</label>
                <div className="col">
                <input type="text" className="form-control" id="password" placeholder="Enter Password" />
                </div>
                </div>
            </div>
          
            <div className="form-group row">
                <div className="col-md-8" >
                <label htmlFor="clientid" className="col col-form-label">Client Id</label>
                <div className="col">
                <input type="text" className="form-control" id="clientid" defaultValue={getID? randId : ""}/>
                </div>
                </div>
                <div className="col-md-4" >
                <label htmlFor="randomid" className="col col-form-label">Generate a client ID</label>
                <div className="col">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="generateid" onClick={getClientId}/>
                <label className="form-check-label" htmlFor="generateid">
                  Get an ID
                </label>
              </div>
                </div>
                </div>
            </div>
          </fieldset>
            
        </form>
        </div>
    </div>
  )
}

export default ConfigBroker