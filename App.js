import React from "react"

const parent = React.createElement(div,{},"Hi this is my app")

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);