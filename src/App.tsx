import { SetStateAction, useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  width: 50vw;
  border: 1px solid black;
  margin-right: 10px;
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border-color: #c8b6ff;
`;

const StyledMarkdown = styled.div`
  width: 50vw;
  border: 1px solid black;
  margin-left: 10px;
  border-radius: 8px;
  border: 2px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  border-color: #c8b6ff;
`;

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("# Hello World");
  const handleTextChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <h1>Beauty Read Me</h1>
      <Container>
        <StyledTextarea value={text} onChange={handleTextChange} />

        <StyledMarkdown>
          <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
        </StyledMarkdown>
      </Container>

      <section>
        <div>
          # Titre de niveau 1 ## Titre de niveau 2 ### Titre de niveau 3
        </div>
        <div>**Texte en gras** __Texte en gras__</div>
        <div>*Texte en italique* _Texte en italique_</div>
        <div>~~Texte barré~~</div>
        <div>* Élément 1 * Élément 2 * Élément 3</div>
        <div>1. Premier élément 2. Deuxième élément 3. Troisième élément</div>
        <div>
          [Cliquez ici](https://www.example.com) pour aller sur notre site web.
        </div>
        <div>![Logo de notre entreprise](https://www.example.com/logo.png)</div>
        <div> {">"} Ceci est une citation. </div>
        <div>code</div>
        {/* <div> `console.log('Hello, world!');`

```javascript
function helloWorld() {
  console.log('Hello, world!');
{"}"}
helloWorld(); */}
        {/* </div> */}
      </section>
      <p className="read-the-docs">
        Made with ❤️ by{" "}
        <a href="https://github.com/clement-gambier2">Clément Gambier</a>
      </p>
    </div>
  );
}

export default App;
