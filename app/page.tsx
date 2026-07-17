
import UnderConstruction from "./components/UnderConstruction";
import HomePage from "./components/HomePage";

export default function Page() {
  const isUnderConstruction = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  return isUnderConstruction ? <UnderConstruction /> : <HomePage />;
}