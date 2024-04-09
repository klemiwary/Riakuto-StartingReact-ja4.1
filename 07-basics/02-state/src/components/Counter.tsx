import { useState } from 'react';
import { Button, Box, Group, Paper, Text } from '@mantine/core';

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((c) => c + 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <Paper p="lg" radius="md" shadow="md" withBorder>
      <Box>
        <Text fz={18}>Count</Text>
        <Text fz={36} fw={600}>
          {count}
        </Text>
      </Box>
      <Group align="center" m="md" mb={6} gap={5}>
        <Button size="sm" w={140} color="teal.7" onClick={increment}>
          +1
        </Button>
        <Button size="sm" w={140} color="red.7" onClick={reset}>
          Reset
        </Button>
      </Group>
    </Paper>
  );
}

export default Counter;
