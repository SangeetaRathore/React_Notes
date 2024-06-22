// there are 2 way or 2 type of component used 1) functional component   2)class component

// functional component
//1 way
// function greet(){
//          return "Good Morning"
// }

// export default greet


//2 way
export default function greet(){
         return "Good Morning"
}

// 3 way (without using default keyword): when where we import  write the name in {}
// ex. import {Greet} from "./component/basic.js"
// export function greet() {
//          return "Good Morning"; // This is a separate function
//        }


// Note: 3rd way is not working

// class component
