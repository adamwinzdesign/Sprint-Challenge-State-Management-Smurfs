1. What problem does the context API help solve?
It helps to allow multiple components to share the same state data so that a large app can have and maintain just one source of data.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are the triggers to send data to the store.  The reducer acts as a filter to determine what action to take once data arrives.  The store is a single repository of data to be shared across multiple components.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state or data that is to be used by the entire application, where component state stays within the component.  If only one component would ever need any piece of data, we would use component state for that data.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is middleware that allows us to handle asynchronous requests inside our action creators.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux is my favorite because it is in high demand and it allows apps to scale without having state get out of hand.  Also, because I don't completely understand it, Redux currently represents the unattainable, which is more attractive by definition.
