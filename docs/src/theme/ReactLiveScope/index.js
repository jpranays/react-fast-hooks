import React from 'react';
import {
  useBattery
} from "react-fast-hooks"

const ReactLiveScope = {
  React,
  ...React,
  useBattery
};

export default ReactLiveScope;