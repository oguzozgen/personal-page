import React from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  CollapseProps,
  ConfigProvider,
  Divider,
  Row,
  Space,
} from "antd";

import theme from "./theme/themeConfig";

const HomePage = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Research & Development",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "QA Automation Development",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "GIS Development",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Software Development",
      children: <p>{text}</p>,
    },
  ];

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Row style={{ minHeight: "100vh" }} align={"middle"} justify={"center"}>
          <Col>
            <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.5);" }}>
              <Row>
                <Col>
                  <Button type="default">Architecture</Button>
                  <Button type="default">SKILLS</Button>
                  <Button type="default">Projects</Button>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Collapse accordion items={items} style={{ width: "100%" }} />
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;
