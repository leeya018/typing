import { useRouter } from "next/router";
import { useEffect } from "react";

import styled from "styled-components";
import { Wrapper, Button, Rotate } from "./style1";

export default function Index({}) {
  const router = useRouter();
  useEffect(() => {
    // router.push("/typing");
  }, []);
  return (
    <Wrapper>
      <div>Index</div>
      <div>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </Wrapper>
  );

}

// 1
