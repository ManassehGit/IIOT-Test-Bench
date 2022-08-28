import React from 'react'

const ConfigPubSub = () => {
  return (

    <div className=''>
        <h2 className='my-4'>Configure Publishers and Subscribers</h2>
        <div className="row">
        <div class="col-sm-6 col-md-6 my-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Publishers</h5>
                    <p class="card-text">
                        <form>
                            <div class="form-group row">
                                <label for="pubsub" class="col-sm-2 col-form-label">pubsub</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="pubsub" placeholder="pubsub" />
                                </div>
                            </div>
                            <div class="form-group row mt-2">
                                <label for="other" class="col-sm-2 col-form-label">Other</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="other" placeholder="Other" />
                                </div>
                            </div>
                    </form>

                    </p>
                </div>
                </div>
            </div>

            <div class="col-sm-6 col-md-6 my-3">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Subscriber</h5>
                    <p class="card-text">
                        <form>
                            <div class="form-group row">
                                <label for="pubsub" class="col-sm-2 col-form-label">pubsub</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="pubsub" placeholder="pubsub" />
                                </div>
                            </div>
                            <div class="form-group row mt-2">
                                <label for="other" class="col-sm-2 col-form-label">Other</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="other" placeholder="Other" />
                                </div>
                            </div>
                    </form>

                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default ConfigPubSub