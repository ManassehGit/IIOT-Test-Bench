import React from 'react'

const ConfigBroker = () => {
  return (
    <div className='container'>
        <div className='container m-4'>
        <form>
            <div class="form-group row">
                <label for="port" class="col-sm-2 col-form-label">Port</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="port" placeholder="Port Number" />
                </div>
            </div>
            <div class="form-group row mt-2">
                <label for="other" class="col-sm-2 col-form-label">Other</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="other" placeholder="Other" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ConfigBroker