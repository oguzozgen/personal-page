import { Card, Col, Row, Collapse, CollapseProps } from "antd";
import styles from "../page.module.css";

export default function Roles() {
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
    <>
      <Row style={{ minHeight: "100vh" }} align={"middle"} justify={"center"}>
        <Col>
          <Card style={{ boxShadow: "0 3px 14px rgba(0,0,0,.4)" }}>
            <Row
              style={{ padding: "2rem", display: "inline-block" }}
              justify={"center"}
              align={"middle"}
            >
              <Row justify={"center"} align={"middle"}>
                <Col>
                  <h1 style={{ fontSize: "1.5rem" }}>Roles</h1>
                </Col>
              </Row>
              <Row justify={"center"} align={"middle"}>
                <Collapse accordion items={items} style={{ width: "20rem" }} />
              </Row>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
