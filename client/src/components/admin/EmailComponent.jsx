import React from 'react';
import { CodeBlock, dracula } from '@react-email/code-block';
import { Button, Row, Column, Section, Font, Text, Heading, Hr, Img, Markdown, Preview} from "@react-email/components";
import Me from '../../assets/images/Me.png';
import {Link} from 'react-router-dom';
const EmailDashboard = () => {

    const code = 
    `export default async (req, res) => {
        try {
          const html = await renderAsync(
            EmailTemplate({ firstName: 'John' })
          );
          return NextResponse.json({ html });
        } catch (error) {
          return NextResponse.json({ error });
        }
      }`
      ;
    return (
        <div>

  <CodeBlock
    code={code}
    lineNumbers
    theme={dracula}
    language="javascript"
  />
    <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />

<Heading as="h2"> <h1>Email Dashboard</h1>
</Heading>
<p>Coming soon...</p>
<Hr/>
  {/* A simple `section` */}
  <Section>
      <Text>Hello World</Text>
    </Section>

    {/* Formatted with `rows` and `columns` */}
     <Section>
      <Row>
        <Column>Column 1, Row 1</Column>
        <Column>Column 2, Row 1</Column>
      </Row>
      <Row>
        <Column>Column 1, Row 2</Column>
        <Column>Column 2, Row 2</Column>
      </Row>
    </Section>

<br />
<br />

<Section>
      <Img src={Me} alt="me" width="300" height="300" />
      <Link href="https://example.com">Example</Link>
    </Section>
<br />
<br />
    <Section>
      <Markdown
        markdownCustomStyles={{
          h1: { color: "red" },
          h2: { color: "blue" },
          codeInline: { background: "grey" },
        }}
        markdownContainerStyles={{
          padding: "12px",
          border: "solid 1px black",
        }}
      >{`# Hello, World!`}</Markdown>

      {/* OR */}

      <Markdown children={`# This is a ~~strikethrough~~`} />
   
    </Section>

    <Preview>Email preview text</Preview>
    <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
   
    

    </div>
    );
    };

export default EmailDashboard;  


