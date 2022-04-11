const root = document.querySelector("main");

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "activity-contain"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "activity",
    name: "activity",
    placeholder: "Input your Activity here"
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "date_act",
    name: "date_act",
    placeholder: "Date"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "add-btn"
  }, "Add Activity"))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);