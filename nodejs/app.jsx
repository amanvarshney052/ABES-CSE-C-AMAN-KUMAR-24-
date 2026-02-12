console.log("Hello from app.jsx");
const parent= document.getElementById('container');
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{},"This is created using React");
const li1=React.createElement("li",{},"Item 1");
const li2=React.createElement("li",{},"Item 2");
const ul=React.createElement("ul",{},li1,li2);
const div=React.createElement("div",{},h2,ul,img);
root.render(div);