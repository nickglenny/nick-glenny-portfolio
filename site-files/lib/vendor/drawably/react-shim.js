// Import-map target for the bare "react" specifier in drawably/dist/react.js.
// The site loads React as a global (assets/*.js UMD bundles), so hand it through.
const R = window.React;
export const createElement = R.createElement;
export const useEffect = R.useEffect;
export const useRef = R.useRef;
export default R;
