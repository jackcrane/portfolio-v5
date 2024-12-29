import React from "react";
import styled from "styled-components";

const colors = {
  beige: "hsl(60deg 20% 95%)",
  black: "hsl(60deg 20% 25%)",

  beigeHover: "hsl(60deg 20% 75%)",
  blackHover: "hsl(60deg 20% 45%)",

  border: "hsl(60deg 20% 85%)",

  blackLight: "hsl(60deg 20% 55%)",
  text: "hsl(60deg 20% 15%)",
  secondary: "hsl(60deg 20% 60%)",
  white: "hsl(60deg 10% 95%)",
};

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 1000px;
  height: 60px;
  padding: 0 16px;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  color: ${colors.text};
`;

export const A = styled.a`
  color: inherit;
  border-bottom: 2px solid ${colors.black};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 4px 8px;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export const P = styled.p`
  color: inherit;
`;

export const Text = styled.p`
  color: inherit;
  font-size: 0.9rem;
  margin: 0;
`;

export const SignatureImage = styled.img`
  height: 40px;
`;

export const FlexSpacer = styled.div`
  flex: 1;
`;

export const Split = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const SplitSection = styled.div`
  flex: 1;
  width: 100%;
`;

export const PaddedSplitSection = styled(SplitSection)`
  padding: 96px 0px;

  @media screen and (max-width: 750px) {
    padding: 32px 0px;
  }
`;

export const Secondary = styled.p`
  color: #727272;
`;

export const ProfileImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid hsl(60deg 20% 95%);
  margin: 0 auto;
  margin-bottom: 16px;
  transition: all 0.2s ease-in-out;
  transform-origin: left;
  transform: translateX(-2px);
  &:hover {
    transform: scale(3);
  }
`;

export const ActionButton = styled.a`
  background-color: ${colors.black};
  border: 2px solid ${colors.black};
  color: ${colors.white};

  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;

  text-decoration: none;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.blackHover};
    border-color: ${colors.blackHover};
  }
`;

export const MutedActionButton = styled(ActionButton)`
  background-color: ${colors.beige};
  color: ${colors.black};

  &:hover {
    background-color: ${colors.beigeHover};
  }
`;

export const Spacer = styled.div`
  height: ${(props) => props.size || 4}px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "0px"};
  align-items: center;
`;

export const CalloutSection = styled.div`
  background-color: ${colors.beige};
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const ListItem = styled.li`
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 2px solid ${colors.border};
  }
`;

export const ListImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
  padding: 8px;
  object-fit: contain;
  background-color: white;
`;

export const ListHeading = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`;

export const ListText = styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 8px;
  align-items: stretch; /* Ensures all cells stretch to match the tallest one */
`;

export const GridCell = styled.div`
  background-color: ${colors.beige};
  padding: 8px;
  border-radius: 8px;
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 8px;
  object-fit: contain;
`;

export const ProjectTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

export const SignatureFooterImage = styled.img`
  position: absolute;
  bottom: -20px;
  right: -20px;
  opacity: 0.125;
  height: 270px;
  transform: rotate(-10deg);
`;
