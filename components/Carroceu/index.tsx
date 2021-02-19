import { useState, useCallback, useEffect } from "react";

import { Container, Logo, List, Item } from "./styles";

const Carroceu: React.FC = () => {
  const images = [
    "/assets/carroceu/subway_stairs.png",
    "/assets/carroceu/dog.png",
    "/assets/carroceu/girl-sleep.png",
  ];
  const [image, setImage] = useState<string>(
    "/assets/carroceu/subway_stairs.png"
  );

  const changeImage = useCallback(() => {
    const index = images.indexOf(image);
    console.log(index);
    if (index === 2) {
      setImage(images[0]);
    } else {
      setImage(images[index + 1]);
    }
  }, [image]);

  useEffect(() => {
    setInterval(changeImage, 10000);
  }, []);

  return (
    <Container>
      <List>
        <Item>
          <Logo src={image} />
        </Item>
      </List>
    </Container>
  );
};

export default Carroceu;
