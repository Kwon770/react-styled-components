# Nesting

Nesting target must be above where nest changed

```js
const Card = styled.div`
  background-color: red;
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Container = styled.div`
  ${Card} {
    background-color: white;
  }
`;

class App extends Component {
  render() {
    return (
        <Container>
          <Form />
        </Container>
    );
  }
}
```