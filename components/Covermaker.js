import FabricCanvas from "./FabricCanvas";
import Properties from "./Properties";
import { FabricContextProvider } from "../context/FabricContext";
export default function Covermaker() {
  return (
    <FabricContextProvider>
      <div className="container">
        <h1>Cover Maker</h1>
        <div className="flex">
          <div className="col">
            <FabricCanvas />
          </div>
          <div className="col">
            <Properties />
          </div>
        </div>
      </div>
    </FabricContextProvider>
  );
}
