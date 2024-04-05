import {
  Avatar,
  Box,
  Flex,
  List,
  ListItem,
  Space,
  Text,
  Title,
} from '@mantine/core';

interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

type Props = {
  school: string;
  characters: Character[];
};

export default function CharacterList(props: Props) {
  const { school, characters } = props;

  return (
    <div>
      <Title order={2}>{school}</Title>
      <List my="xl" listStyleType="none">
        {characters.map((character) => (
          <ListItem key={character.id} display="flex" my="lg">
            <Flex>
              <Avatar color="red.5" radius="xl" size={48} />
              <Box ml="md" ta="left">
                <Text>{character.name}</Text>
                <Text span display="flex">
                  {character.grade}年生
                  <Space w="xs" />
                  {character.height ? character.height : '???'}cm
                </Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
}