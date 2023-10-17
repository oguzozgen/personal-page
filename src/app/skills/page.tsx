import styles from "../page.module.css";
import { Card, Col, Row } from "antd";

export default function Skills() {
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
                  <h1 style={{ fontSize: "1.5rem" }}>Skills</h1>
                </Col>
              </Row>
              <Row justify={"center"} align={"middle"}>
                <Col>
                  <div
                    style={{
                      textAlign: "center",
                      color: "rgba(0, 0, 0, 0.54)",
                      fontSize: "0.875rem",
                    }}
                  >
                    Trying to do well and be creative
                    <br />
                    Exploring the missing gear of technology
                    <br />
                    Learning every-part of my interest
                  </div>
                </Col>
              </Row>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
