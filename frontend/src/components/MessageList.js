import { Avatar, Col, Row } from "antd";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../layout/MainLayout";

export function MessageList({ data }) {
  const user = useContext(UserContext);
  const uiMessagesRef = useRef(null);

  useEffect(() => {
    if (uiMessagesRef.current) {
      uiMessagesRef.current.scrollBy({
        top: uiMessagesRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [data]);

  return (
    <Row className="message-list" ref={uiMessagesRef}>
      <Col xs={24}>
        {data?.map((msg, index) => (
          <Row
            key={index}
            className={msg.username === user?.username ? "right" : "left"}
          >
            <Avatar size="large">{msg.username.slice(0, 4)}</Avatar>{" "}
            <span className="text">{msg.message}</span>
          </Row>
        ))}
      </Col>
    </Row>
  );
}
