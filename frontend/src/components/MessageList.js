import { Avatar, Col, Row } from "antd";
import { useContext } from "react";
import { useScroll } from "../hooks";
import { UserContext } from "../layout/MainLayout";

export function MessageList({ data }) {
  const user = useContext(UserContext);
  const { messagesRef } = useScroll(data);

  return (
    <Row className="message-list" ref={messagesRef}>
      <Col xs={24}>
        {data?.map((msg, index) => (
          <Row
            key={index}
            className={msg.username === user?.username && "right"}
          >
            <Avatar size="large">{msg.username.slice(0, 4)}</Avatar>{" "}
            <span className="text">{msg.message}</span>
          </Row>
        ))}
      </Col>
    </Row>
  );
}
