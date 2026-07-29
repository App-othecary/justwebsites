import HomePage from "./components/HomePage";
import UnderConstruction from "./components/UnderConstruction";

export default function Page({ children }: { children: React.ReactNode }) {
  const isUnderConstruction = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  return isUnderConstruction ? <UnderConstruction /> : <HomePage>{children}</HomePage>;
}
