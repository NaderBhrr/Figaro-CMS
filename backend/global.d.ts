// The declaration to be able to import json files
declare module '*.json' {
  const value: any;
  export default value;
}
