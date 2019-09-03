import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          EasingType="easeOutBounce"
          ShowAtPosition={1200}
          AnimationDuration={1500}
        />
      </div>
    );
  }
}