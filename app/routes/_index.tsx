import type { V2_MetaFunction } from "@remix-run/node";
import NavBar from "~/features/components/panel/NavBar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <NavBar/>
  );
}
