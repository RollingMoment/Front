import { useEffect } from "react";

function UnknownRoute() {
    useEffect(() => {
        window.location.replace("/invite");
    }, []);

    return (
      <div id="wrapper">
        잘못된 이동입니다.
      </div>
    );
  }
  
  export default UnknownRoute;