import Accordion from "./Accordion";

function App() {
  const accordionItems = [
    {
      id: "1",
      label: "Shopify",
      content: "online E-commerce platform",
    },
    {
      id: "2",
      label: "Twitter",
      content: "Online platform to talk and share and post your tweets",
    },
    {
      id: "3",
      label: "YouTube",
      content:
        "E-Media platform to create and download content in the form of videos",
    },
  ];

  return <Accordion accordionItems={accordionItems} />;
}

export default App;
