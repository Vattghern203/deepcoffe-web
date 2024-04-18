import { useState } from "react";

export function useToggle(initialState = false) {

  const [toggleState, setToggleState] = useState(initialState)

  const toggle = () => setToggleState(!toggleState)

  return [toggleState, toggle]
}

