import React from 'react'

const ConfigBroker = () => {
  return (
    <div className=''>
        
        <div className='m-4'>
        <div>
        <h2 className='my-5'>Configure Connection to Broker</h2>
        <button type="button" class="btn btn-success">Connect</button>
        </div>
        <form>
          <fieldset className='border p-2 my-2'>
            <legend className='col'>Host</legend>
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
                <input type="number" className="form-control" id="port" placeholder="Port Number" value={"5000"}/>
                </div>
                </div>

                <div className="col-md-2" >
                <label htmlFor="timeout" className="col col-form-label">Timeout</label>
                <div className="col">
                <input type="number" className="form-control" id="timeout" placeholder="Timeout" />
                </div>
                </div>
            </div>
          </fieldset>

          <fieldset className='border p-2 my-2'>
          <legend className='col'>Protocol</legend>
            <div className="form-group row">
                <div className="col-md-6" >
                <label htmlFor="protocol" className="col col-form-label">Protocol</label>
                <div className="col">
                  <select class="form-select" aria-label="Select protocol">
                  <option selected value="tcp">TCP</option>
                  <option value="ssl">SSL</option>
                  </select>
                </div>
                </div>
            </div>
          </fieldset>

          <fieldset className='border p-2 my-2'>
          <legend className='col'>User Authentication</legend>
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
          </fieldset>

          <fieldset className='border p-2 my-2'>
          <legend className='col'>Connection Options</legend>
            <div className="form-group row">
                <div className="col-md-8" >
                <label htmlFor="clientid" className="col col-form-label">Client Id</label>
                <div className="col">
                <input type="text" className="form-control" id="clientid" placeholder="Enter Client ID" />
                </div>
                </div>
                <div className="col-md-4" >
                <label htmlFor="randomid" className="col col-form-label">Generate a client ID</label>
                <div className="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="generateid" />
                <label class="form-check-label" for="generateid">
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