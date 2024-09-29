# Redux

IT is an external library by using redux we can able to manage states of an application

In react state is nothing but a container.

there are few hooks to manage states of an application - # useState , # useReducer , # useContext

useState- is limited to manage the state of application within the component

useReducer- is used to manage the state of application across the component

useContext- is used to manage the state of application across the application

Redux- uses reducer to manage the states across the application

Redux toolkit is an upgraded version of redux


The flow in redux can be denoted with a word called S A R S

S - State
A - Action
R - Reducers
S - Store

firstly the state is defined in the store

then the reducers are defined

then the actions are defined

then the store is defined


State will send the data/updates to the reducers as events and reducers will update the store through actions 

there can be many reducers in the application but only one store


now they divided into 3 parts like 

APP- we create a store and then we wrap the data using provider and provides store as a value to the provider

Redux - In this we create every feature with Create Slice and we create a initial state and in reducers through actions we update the state. we also export the reducers and actions.

state - To manage the state by using dispatch we send the state to reducers and then reducer will update the store. Using Selector we can use the state in the component

we use useSelector and useDispatch to use the updated state in the store in any component and dispatch the action