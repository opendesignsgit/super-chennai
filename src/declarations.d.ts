declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// For SCSS files (since you are using sass in Payload)
// declare module '*.scss' {
//   const content: { [className: string]: string };
//   export default content;
// }

// declare module '*.jpg';
// declare module '*.png';
// declare module '*.svg';
