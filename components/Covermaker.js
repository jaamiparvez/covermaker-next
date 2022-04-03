import FabricCanvas from "./FabricCanvas";
import Properties from "./Properties";
import { FabricContextProvider } from "../context/FabricContext";
export default function Covermaker() {
  return (
    <FabricContextProvider>
      <div>
        <div className="flex">
          <div>
            <FabricCanvas />
          </div>
          <div>
            <Properties />
          </div>
        </div>
      </div>
    </FabricContextProvider>
  );
}
