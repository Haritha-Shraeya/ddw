import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Format from "../layout/format";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Section5 from "../components/section5";
import Section6 from "../components/section6";

export default function Home() {
  return (
    <Format>
      <Section1></Section1>
      <Section6></Section6>
      <Section2></Section2>
      <Section5></Section5>
    </Format>
  );
}
