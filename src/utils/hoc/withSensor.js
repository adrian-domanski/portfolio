import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"

const withSensor = Component => {
  return props => {
    const [isVisible, setIsVisible] = useState(false)
    return (
      <VisibilitySensor
        partialVisibility
        onChange={visible => visible && !isVisible && setIsVisible(true)}
      >
        <Component {...props} isVisible={isVisible} />
      </VisibilitySensor>
    )
  }
}

export default withSensor
