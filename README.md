# react-js
# parcel
-dev build
-local server
-HMr = hot module replacement
-file watching algorithms - written in c++
-caching - faster builds
-image optimization
-minification
-bundling
-compress
-consistant hashing
-code splitting 
-differential bundling - support older browsers
-diagnostic
-error handling
-https
-tree shaking - remove unused code
-different dev and prod bundles




/**
 * header
 * - logo
 * -links
 * 
 * body
 * -search
 * - cards container
 *  ---cards
 * --------img
 * ---------res name
 * --------cuisine
 * --------rating
 * --------price
 * ---------time
 * 
 * 
 * 
 * footer
 * - copyright
 * -estd
 * -contact
 * -complaints
*/



two tyrpes of export/import:
----------------------------


--default import/export:
---- export default component;
---- import component from "path";

-- named import/export:
---- export const component = "";
---- export {component};
---- import {component} from "path";

* for the same component you can also use both default and named exports

* REACT HOOKS:
special utility functions of react written by fb developers
normal js utitlity fn
types:
1.useState() - to give generate superpowerful state variable, maintains a  state to the component.
2.useEffect() -  

* routing in web apps- 2types
- client side routing
- server side routing 



# redux toolkit:
* install libraries - @reduxjs/toolkit and react-redux
* build our store
* connect store to app
* slice(cartslice)
* dispatch(action)
* selector


# testing:
* diff types of testing a developer can do:
* unit testing - testing react component in isolation(i.e testing only my header component.)
* integration testing
* end-end testing(e-e testing)
 
 # setting up testing:
 * install react testing library
 * install jest
 * install babel dependancies - in jest website
 * configure babel
 * configure parcel config file to disable the babel transpiler in parcel
 * npx jest --init
 * install jsdom library - command in react testing library - setup-jest >28 versions
 
  # testing files 
  * headers.test.ts
  * headers.spec.js
  * headers.test.js
  * headers.spec.ts
   
   "__" "dunder methpd" tests
 * then install @babel/preset-react to make JSX work in testcases...
 * include @babel/preset-react into bable config
 * install npm i -D @testing-library/jest-dom(expect(heading).toBeInTheDocument() - has to work)


 * test cases: 
   * render something
   * querying
   * assertion

 * grouping the test cases:
   * using describe
   * can use nested describe
   * test === it
  