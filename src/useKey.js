import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          //basically e.code is the physical key that we pressed on the keyboard it check with the key that we given
          action();
        }
      }
      document.addEventListener("keydown", callback);

      //  IT IS BASICALLY A CLENING UP THE FUNCTION
      // as soon as the movieDetaile component unmounted the eventListner will removed from the document, then we will avoid having so many event listners in our dom. which might become a memory problem in the larger application like when we have 100s and 1000s of eventlistners.
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
