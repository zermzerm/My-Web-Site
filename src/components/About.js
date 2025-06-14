"use client";

import styled from "styled-components";

export default function About() {
  return (
    <Main>
      <H1>About Me</H1>
      <section>
        <H2>[적응력]</H2>
        <P>
          어린 시절부터 다양한 환경에서 자라며, 그 과정에서 많은 이사를 하게 되었습니다. 이러한
          경험은 저에게 새로운 환경에 대한 적응 력을 기를 수 있는 기회로 다가왔습니다. 이러한 경험은
          새로운 도전에 대한 두려움을 극복하고, 변화를 수용하며 성장하는 데에 큰 자신감을 심어주
          었습니다.
        </P>
      </section>
      <section>
        <H2>[친화력]</H2>
        <P>
          위의 적응력을 통해 얻은 제 친화력을 가지고 제가 해왔던 모든 팀 프로젝트에서는 친밀한
          분위기를 유지하며 팀원들과의 관계를 발전시켰고, 이로 인해 프로젝트 팀 내에서 어색함을 풀고
          자유롭게 의견을 나누며 소통하는 분위기를 조성했습니다.
        </P>
      </section>
      <section>
        <H2>[창의력]</H2>
        <P>
          프로젝트에서 기술적인 문제나 디자인적인 고민에 대해 새로 운 시각과 아이디어를 제시하여
          프로젝트의 품질을 향상시켰습니다. 특히, QA 역할을 수행하면서 창의적인 문제 해결 능력을
          발휘 하여 새로운 시각에서의 시도를 통해 생각치 못했던 결함을 발견하는 등 프로젝트의 품질을
          향상시키는 데에 큰 기여했습니다.
        </P>
      </section>
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 400px;
  gap: 50px;
`;

const H1 = styled.h1`
  font-size: 30px;
  color: #6467c0;
`;

const H2 = styled.h2`
  color: #6467c0;
`;

const P = styled.p`
  color: #6467c0;
`;
