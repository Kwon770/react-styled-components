# withComponent

### &#60;_styled_&#62;.withComponent("&#60;_Tag_&#62;") : 이미 존재하는 컴포넌트 styled의 Tag만 변경하여 재활용
### styled(_withComponent_)&#96;_css_&#96; : styled extending


```js
const Button = styled.button`
  ~
  ~
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;
```