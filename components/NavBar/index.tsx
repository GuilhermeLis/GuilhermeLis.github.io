import React from "react";

import { Container, List, Item, Linka as Link, ItemLink, Logo } from "./styles";

const NavBar: React.FC = () => {
  return (
    <Container>
      <List>
        <Item ifIsAImage>
          <Logo src="/assets/logo/logo_transparent_background.png" />
        </Item>
        <Item>
          <Link href="/">
            <ItemLink>Home</ItemLink>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <ItemLink>My Works</ItemLink>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <ItemLink>Upcoming exhibits</ItemLink>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <ItemLink> Keep in touch</ItemLink>
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default NavBar;
