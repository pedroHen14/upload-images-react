import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const cardsData = [
    {
      id: '1617555636970000',
      ts: 1617555636970000,
      title: 'Doge',
      description: 'The best doge',
      url: 'https://github.com/pedroHen14.png',
    },
    {
      id: '1617556158800000',
      ts: 1617556158800000,
      title: 'Danilo',
      description: 'The best friend',
      url: 'https://github.com/pedroHen14.png',
    },
  ];

  const [urlImage, setUrlImage] = useState('');

  const { onOpen, onClose, isOpen } = useDisclosure();

  function viewImage(url: string) {
    setUrlImage(url);

    onOpen();
  }

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cardsData?.map(card => (
          <Card
            data={card}
            viewImage={() => viewImage(card.url)}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage onClose={onClose} imgUrl={urlImage} isOpen={isOpen} />
    </>
  );
}
