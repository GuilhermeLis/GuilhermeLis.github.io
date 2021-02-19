import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Image).attrs({
  layout: "fill",
})`
  object-fit: cover;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  height: 100%;
  width: 100%;
  position: relative;
`;
