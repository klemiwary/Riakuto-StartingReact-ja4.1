import { useEffect, useState } from 'react';
import { Button, Card, Text } from '@mantine/core';
import { IconRotate } from '@tabler/icons-react';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

function Timer({ maxCount = MAX_COUNT }: Props) {
  const [countLeft, setCountLeft] = useState(maxCount);

  function tick() {
    setCountLeft((t) => t - 1);
  }

  function reset() {
    setCountLeft(maxCount);
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (countLeft === 0) {
      setCountLeft(maxCount);
    }
  });
  // }, [countLeft, maxCount]);

  return (
    <Card px={40} py={20} radius="md" shadow="md" withBorder>
      <Card.Section pt={10} pb={5}>
        <Text fz={18}>Count</Text>
        <Text fz={42} fw={600}>
          {countLeft}
        </Text>
      </Card.Section>
      <Button
        w={250}
        color="red.8"
        leftSection={<IconRotate />}
        onClick={reset}
      >
        Reset
      </Button>
    </Card>
  );
}

export default Timer;
