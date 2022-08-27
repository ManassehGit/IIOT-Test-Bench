import React from 'react'
import ConfigBroker from '../../Settings/ConfigBroker'
import DashBase from '../DashBase/DashBase'

const ConfigConn = () => {
  return (
    <div>
        <DashBase>
            <ConfigBroker />
        </DashBase>
    </div>
  )
}

export default ConfigConn