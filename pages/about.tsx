import { Suspense } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { resumeAtom } from "@store/resumeAtoms";

const Resume = dynamic(() => import("@components/Resume"), { suspense: true });

const About: NextPage = () => {
  const data = useRecoilValue(resumeAtom);
  return (
    <div>
      <Head>
        <title>Curriculum</title>
      </Head>

      <Suspense>{data && <Resume data={data} />}</Suspense>
    </div>
  );
};

export default About;
