import { ResumeResponseProps } from "@utils/interfaces/api";
import { Suspense, useState, useEffect, useCallback } from "react";
import getMyCvApi from "@api/getMyCvApi";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

const Resume = dynamic(() => import("@components/Resume"), { suspense: true });

const About: NextPage = () => {
  const [data, setData] = useState<ResumeResponseProps | null>(null);

  const getResumeCb = useCallback(async () => {
    const result = await getMyCvApi();
    setData(result);
  }, []);

  useEffect(() => {
    getResumeCb();
  }, [getResumeCb]);

  if (data === null) return <>Loading...</>;

  return (
    <div>
      <Head>
        <title>Curriculum</title>
      </Head>
      <Suspense>
        <Resume data={data} />
      </Suspense>
    </div>
  );
};

export default About;
