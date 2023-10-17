"use client";
import React from "react";
import { Button, Card, Col, ConfigProvider, Divider, Row } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import theme from "./theme/themeConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MapComp from "./components/MapComp";

const HomePage = () => {
  const router = useRouter();
  //backgroundColor: "rgba(255, 255, 255, 0.5);"
  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <Row
          style={{
            minHeight: "100vh",
            padding: "0px",
            margin: "0px",
            textAlign: "center",
          }}
          align={"middle"}
          justify={"center"}
        >
          <MapComp style={{ zIndex: 1, position: "absolute" }}></MapComp>
          <Col style={{ zIndex: 3, position: "absolute" }}>
              <Card
                className="card-class-main"
                style={{
                  boxShadow: "0 3px 14px rgba(0,0,0,.4)",
                  background: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <Row
                  style={{ padding: "2rem", display: "inline-block" }}
                  justify={"center"}
                  align={"middle"}
                >
                  <Row justify={"center"} align={"middle"}>
                    <Col>
                      <h1 style={{ fontSize: "1.5rem" }}>Oğuz Özgen</h1>
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
                <Row justify={"center"} align={"middle"}>
                  <Col>
                    <Button
                      size="middle"
                      type="default"
                      title="Architecture"
                      onClick={() => router.push("/architecture")}
                    >
                      Architecture
                    </Button>
                  </Col>
                  <Col>
                    <Button size="middle" type="default" title="Roles">
                      <Link href="/roles" target="_blank" title="Roles">
                        Roles
                      </Link>
                    </Button>
                  </Col>
                  <Col>
                    <Button size="middle" type="default" title="Skills">
                      <Link href="/skills" target="_blank" title="Skills">
                        Skills
                      </Link>
                    </Button>
                  </Col>
                  <Col>
                    <Button size="middle" type="default" title="Projects">
                      <Link href="/projects" target="_blank" title="Projects">
                        Projects
                      </Link>
                    </Button>
                  </Col>
                </Row>
                <Divider />
                <Row justify={"center"} align={"middle"}>
                  <Button size="middle" type="default" title="Github">
                    <Link
                      href="https://github.com/oguzozgen"
                      target="_blank"
                      title="Github"
                    >
                      <GithubOutlined />
                    </Link>
                  </Button>
                  <Button size="middle" type="default" title="Linkedin">
                    <Link
                      href="https://www.linkedin.com/in/oguzozgen"
                      target="_blank"
                      title="Linkedin"
                    >
                      <LinkedinOutlined />
                    </Link>
                  </Button>
                  <Button size="middle" type="default" title="Twitter">
                    <Link
                      href="https://twitter.com/oguzozgenn"
                      target="_blank"
                      title="Twitter"
                    >
                      <TwitterOutlined />
                    </Link>
                  </Button>
                </Row>
              </Card>
           
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
};

export default HomePage;

/**
 <Col>
              <Card style={{ boxShadow: "0 3px 14px rgba(0,0,0,.4)" }}>
                <Row
                  style={{ padding: "2rem", display: "inline-block" }}
                  justify={"center"}
                  align={"middle"}
                >
                  <Row justify={"center"} align={"middle"}>
                    <Col>
                      <h1 style={{ fontSize: "1.5rem" }}>Oğuz Özgen</h1>
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
                <Row justify={"center"} align={"middle"}>
                  <Col>
                    <Button size="middle" type="default" title="Architecture">
                      <Link href="/architecture">Architecture</Link>
                    </Button>
                    <Button size="middle" type="default" title="Roles">
                      <Link href="/roles">Roles</Link>
                    </Button>
                    <Button size="middle" type="default" title="Skills">
                      <Link href="/skills">Skills</Link>
                    </Button>
                    <Button size="middle" type="default" title="Projects">
                      <Link href="/projects">Projects</Link>
                    </Button>
                  </Col>
                </Row>
                <Divider />
                <Row justify={"center"} align={"middle"}>
                  <Button size="middle" type="default" title="Github">
                    <Link href="https://github.com/oguzozgen">
                      <GithubOutlined />
                    </Link>
                  </Button>
                  <Button size="middle" type="default" title="Linkedin">
                    <Link href="https://www.linkedin.com/in/oguzozgen">
                      <LinkedinOutlined />
                    </Link>
                  </Button>
                  <Button size="middle" type="default" title="Twitter">
                    <Link href="https://twitter.com/oguzozgenn">
                      <TwitterOutlined />
                    </Link>
                  </Button>
                </Row>
              </Card>
            </Col>
 */
