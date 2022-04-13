import { Card, Col, Text } from "@nextui-org/react";

export default function FooterMenuContent() {
  return (
    <Card.Body css={{ py: "$10" }}>
      <Text
        size={24}
        weight="light"
        color="#0E0E0E"
        style={{ textAlign: "left" }}
      >
        Menu content and page provided by FoodDiscovery ® App. All rights reserved.
      </Text>
    </Card.Body>
  )
}

