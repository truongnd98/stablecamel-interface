import { useEffect, useState } from "react";
import { image } from "../../assets/logos/favicon";

function OverlayLoading() {
  const [load, setLoaded] = useState(true);
  const element = document.getElementById("body-id");
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
      element?.classList.remove("overflow-hidden");
    }, 800);
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`divLoader ${!load && "d-none"}`}>
      <img
        className="imgLoader"
        src={image}
        alt="Stable Camel - Stable Camel favicon"
      ></img>
    </div>
  );
}

export default OverlayLoading;
