// const container = document.getElementById('react-container');

// ReactDOM.render("Hello! Welcome to React",container);

// Functional component
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }

// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container),container);

class ReactContainer extends React.Component {
  // constructor - to initialize the state

//   constructor(name) {
//     this.name = name;
//   }

  // render method to render the react dom
  render() {
    return React.createElement(
      `div`,
      null,
      `Hey Kalvians ${this.name}`,
      React.createElement(`div`, null, `Let's rock and roll with classes`)
    );
  }
}

// const file = new ReactContainer("rahul")
const container = document.getElementById("react-container");
ReactDOM.render(React.createElement(ReactContainer), container);
