# Using styled component from React Native

### Instead of _styled.div_ / _styled.p_, you must use _styled.View_ / _styled.Text_

```js
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <Container>
      <Title>Open up App.js to start working on your app!</Title>
    </Container>
  );
}

```