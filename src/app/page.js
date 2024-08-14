import Image from "next/image";
import Hero from "./component/hero";
import Card from "./component/card";
import Sidebar from "./component/sidebar1";
import Calender from "./component/calender";
// import Cal from "../app/calender/page"

export default function Home() {
  return (
    <div className="mt-10">
      {/* <Hero /> */}
      {/* <Card /> */}
      {/* <Sidebar /> */}
      <Calender />
      {/* <Cal /> */}
    </div>
  );
}
