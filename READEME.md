# Rick's Special version of Warren's Web Guided Lecture on Custom Hooks.

## Class Questions

- ### What is stateful Logic?
  -  Any code that is used to manipulate data (shown or not shown on the screen). Stateful logic can be shared between components in the sense that they are subscribed to its changes and, some of them, can perform changes on it. Stateful logic is any code that uses state, but in the case of hooks I would define it as a behavior created with the use of one or more hooks. It's like a perk that you're adding to a component.

- ### Why are we looking at stateful logic?
  -  Separation of concerns. Readability and Re-useability…Because we want to use a hook in multiple places. We may need state in multiple components, and this is why we need stateful logic to accomplish the sharing. Or we might think of it as reusable code that keeps separation of concerns possible and DRY. We use it to make changes to components and re-render the DOM. 

- ### Separation of Concerns = 
  - Each component/module/function should be as small as possible and do ONE thing. 
  - Keeps code DRY and re-usable
  - Makes each piece east to test

- ### Components breakdown
  - ID CODE = Identify the code that can be modularized
  - MOVE IT = move that code into it's own file
  - ID COMPONENT = identify the dependencies and connect them to module
  - REPLACE = replace hard code with module
  - TEST = test that app works the same as before. 

## Modularizing Components
  - Subcomponents (Presentaional Logic)
  - Services (Data Logic)
  - Custom Hooks (Stateful Logic)

## Kinds of Logic
    - Presentational
    - 