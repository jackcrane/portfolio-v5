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

  popout: "hsl(60deg 20% 85%)",
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.popout};
  border: 0px solid ${colors.popout};
  border-width: ${({ popout }) => popout && 10}px;
  transition: all 0.4s ease-in-out;
  transition-delay: ${({ popout }) => !popout && "0.2s"};
`;

export const ContentContainer = styled.div`
  container-type: inline-size;
  border-radius: ${({ popout }) => (popout ? 8 : 0)}px;
  transition: all 0.4s ease-out;
  transition-delay: ${({ popout }) => !popout && "0.4s"};
  flex: 1;
  overflow: auto;
  background-color: white;
`;

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

export const H4 = styled.h4`
  font-size: 1.25rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 2px solid ${colors.blackLight};
  margin: 16px 0;
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

  @container (max-width: 750px) {
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

  @container (max-width: 750px) {
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

export const PopoutContainer = styled.div`
  width: ${({ popout }) => (popout ? "clamp(300px, 20%, 350px)" : "0px")};
  transition: all 0.4s ease-in-out;
  /* transition-delay: 0.2s; */
  transition-delay: ${({ popout }) => (popout ? "0.2s" : "0s")};
  padding-left: ${({ popout }) => (popout ? "16px" : "0px")};
  padding-top: 8px;
  color: ${colors.black};
`;

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-info-hexagon"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
    <path d="M12 9h.01" />
    <path d="M11 12h1v4h1" />
  </svg>
);

const InfoContainer = styled.button`
  color: ${colors.secondary};
  &:hover {
    color: ${colors.black};
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  line-height: 0;
`;

export const Info = (props) => (
  <InfoContainer {...props} className={"m-hos-750"}>
    <InfoIcon />
  </InfoContainer>
);

export const Grow = styled.div`
  flex: 1;
`;

const CollapseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-collapse"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M15 4v16" />
    <path d="M9 10l2 2l-2 2" />
  </svg>
);

export const Collapse = (props) => (
  <InfoContainer {...props}>
    <Row gap={"8px"}>
      <span
        style={{
          fontSize: "1rem",
        }}
      >
        Close
      </span>
      <CollapseIcon />
    </Row>
  </InfoContainer>
);

export const Ul = styled.ul`
  padding: 0;
  padding-left: 16px;
  margin: 0;
`;
