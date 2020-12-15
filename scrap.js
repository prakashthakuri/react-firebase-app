// using and understanding ...operator



function f(a,b, ...args){ // ...args is actualy a array
    console.log(...args) // result is 3, "compoennt" true
    console.log(typeof [...args])
    console.log(typeof {...args}) //displays within the array 
}
f(1,2,3, "Compoenent", true) // the ... operator takes any args after a,b and its remaining params



///Props and component

const ProfileRedirect = ({ component: Component, ...rest }) => { // component
    // component parameter is assigned with Component and rest of the other params are defined as '...rest'
    console.log({...rest})
    console.log({Component})
    
  };

  ProfileRedirect({component: "Hello World"})

  // More on rest and component
const ProfileRedirect = ({ component: Component, ...rest }) => { // component
    // component parameter is assigned with Component and rest of the other params are defined as '...rest'
    console.log({...rest})
    console.log({Component})
    
  };

  ProfileRedirect({ "component": "This is a component", "Hellow World": "I am Prakash",  "Hello": "this is ressst"})