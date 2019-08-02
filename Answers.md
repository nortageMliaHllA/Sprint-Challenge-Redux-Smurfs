1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.map
Array.filter
Array.reduce
We use spread to create a new object while extending the properties of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are packets of information that contain an action type and some data that we want associated with that action type. Such as, login, logout, updating status, friends request, etc. Reducers are new version of state based on the current state and a given action. Reducers are the only thing can update state & it takes in two objects(currentState, Action). Store is were you keep track of all our state(Array/Javascript objects). The store is known as a 'single source of truth' because, the state(data) of your app is stored in an single state object.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be accessed by a connected component, where component state can only be connected to one component. It would be a good time to use application state when you want to share data between components and component state for local operations.

4.  What is middleware?

Middleware will intercept every action  before it flows into reducer. If a function is called, we get access to dispatch.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk provides the ability to handle asynchronous operations inside our Action Creators. Redux middleware can intercept the normal Redux flow, and do something before actions make it to the reducer.

6.  Which `react-redux` method links up our `components` with our `redux store`?

{ Connect } links up our `components` with our `redux store`.
