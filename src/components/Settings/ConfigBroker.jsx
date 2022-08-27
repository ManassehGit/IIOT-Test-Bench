import React from 'react'

const ConfigBroker = () => {
  return (
    <div className='container'>
        
        <div className='container m-4'>
        <h2 className='m-4'>Configure Connection to Broker</h2>
        <form>
            <div className="form-group row">
                <label htmlFor="port" className="col-sm-2 col-form-label">Port</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="port" placeholder="Port Number" />
                </div>
            </div>
            <div className="form-group row mt-2">
                <label htmlFor="other" className="col-sm-2 col-form-label">Other</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="other" placeholder="Other" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ConfigBroker