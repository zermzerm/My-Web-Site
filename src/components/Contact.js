"use client";

import styled from "styled-components";

export default function Contact() {
  return (
    <Main>
      <Section>
        <p>mail</p>
        <p>zerm0907@gmail.com</p>
      </Section>
      <Section>
        <p>github</p>
        <p>https://github.com/zermzerm</p>
      </Section>
      <Section>
        <p>tistory</p>
        <p>https://zermzerm.tistory.com/</p>
      </Section>
      <Section>
        <p>tell</p>
        <p>01048715869</p>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
