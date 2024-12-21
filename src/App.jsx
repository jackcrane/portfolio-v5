import React, { useEffect } from "react";
import {
  A,
  ActionButton,
  CalloutSection,
  Content,
  FlexSpacer,
  H1,
  H2,
  H3,
  Split,
  SplitSection,
  List,
  ListItem,
  MutedActionButton,
  Nav,
  P,
  ProfileImage,
  Row,
  Secondary,
  SignatureImage,
  Spacer,
  ListImage,
  ListHeading,
  Text,
  ListText,
  PaddedSplitSection,
  GridContainer,
  GridCell,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  SignatureFooterImage,
} from "./kit";
import signature from "../images/signature.png";
import profile from "../images/ski.png";
import { useMouse } from "@uidotdev/usehooks";
import presidentsAward from "../images/pvsa.png";
import ftc from "../images/ftc.png";
import faa from "../images/faa.png";
import oac from "../images/oac.png";
import scd from "../images/scd.png";
import slu from "../images/slu.png";
import di from "../images/di.png";
import ispace from "../images/ispace.png";
import pns from "../images/pns.png";
import ogi from "../images/ogi.png";
import sluop from "../images/sluop.png";
import tik from "../images/tik.png";
import mtsx from "../images/mtsx.png";
import paddlefestVolunteer from "../images/paddlefest-volunteer.png";
import paddlefestAdmin from "../images/paddlefest-admin.png";
import mts from "../images/mts.png";

const awards = [
  {
    title: "Presidential Volunteer Service Award",
    description: "5x award recipient for contributions to STEM education",
    icon: presidentsAward,
  },
  {
    title: "FIRST Deans List finalist",
    description: "Awarded Ohio's top leadership award through FIRST Robotics",
    icon: ftc,
  },
  {
    title: "Private Pilot's License",
    description:
      "Passed my PPL checkride on my 17th birthday, the earliest legally possible",
    icon: faa,
  },
  {
    title: "Volunteer of the Year",
    description:
      "Awarded for my work as volunteer coordinator for Ohio River Paddlefest",
    icon: oac,
  },
  {
    title: "Excellence in Technology Award",
    description:
      "Awarded by my high school for my work launching and leading our robotics team",
    icon: scd,
  },
];

const work = [
  {
    company: "SLU Department of Mechanical Engineering",
    title: "Engineering Fundamentals TA",
    icon: slu,
  },
  {
    company: "SLU Center for Additive Manufacturing",
    title: "Undergraduate Research Adjacent",
    icon: slu,
  },
  {
    company: "Differential Development Shop",
    title: "Co-Op Software Engineer",
    icon: di,
  },
  {
    company: "iSPACE STEM",
    title: "STEM Teacher & Curriculum Developer",
    icon: ispace,
  },
  {
    company: "Perfect North Slopes",
    title: "Kids Ski Instructor",
    icon: pns,
  },
];

const projects = [
  {
    title: "OG Image Generator",
    description:
      "OG Image Generator is an 'opengraph image generator as a service', providing an API endpoint to make custom site preview images without the need for design skills.",
    image: ogi,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/og-image-generator",
      },
      {
        title: "Live site",
        url: "https://og-image.xyz",
      },
      {
        title: "Blog post",
        url: "https://blog.jackcrane.rocks/2021/08/20/og-image.html",
      },
    ],
  },
  {
    title: "Github Profile Tik-Tak-Toe",
    description:
      "A somewhat fun game for visitors to my GitHub profile and blog post to play. This project won me the Cloudflare Summer Dev Challenge for my use of serverless functions.",
    image: tik,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/gh-tik-tak-toe",
      },
      {
        title: "Play live",
        url: "https://github.com/jackcrane",
      },
      {
        title: "Blog post",
        url: "https://blog.jackcrane.rocks/2021/10/19/gh-tik-tak-toe.html",
      },
    ],
  },
  {
    title: "SLU Open Project",
    description:
      "SLU Open Project is a project for SLU Center for Additive Manufacturing as a home grown project management and project submission system.",
    image: sluop,
  },
  {
    title: "MTS Xpress",
    description:
      "MTS Express is a mobile app for Myers Tire Supply that allows sales reps to quickly and easily order new products for their customers via a barcode scanner, cart management, and database integration.",
    image: mtsx,
  },
  {
    title: "Paddlefest Volunteer Registration",
    description:
      "A web platform for registering and managing volunteers for Ohio River Paddlefest.",
    image: paddlefestVolunteer,
  },
  {
    title: "Paddlefest Volunteer Admin",
    description:
      "An admin dashboard for Paddlefest administration to manage volunteers. (Names and PII redacted for privacy)",
    image: paddlefestAdmin,
  },
  {
    title: "MTS Rep Management System",
    description:
      "A web platform for Myers Tire Supply's reps to view and understand their sales, unlocking improved performance. (Names and numbers redacted for privacy)",
    image: mts,
  },
];

const socials = [
  {
    icon: (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
          fill="#080341"
        />
      </svg>
    ),
    url: "mailto:jack@jackcrane.rocks",
    handle: "jack@jackcrane.rocks",
  },
  {
    icon: (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
          fill="#080341"
        />
      </svg>
    ),
    url: "mailto:jack.crane@slu.edu",
    handle: "jack.crane@slu.edu",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
      >
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    url: "https://x.com/howdyitsjack",
    handle: "@howdyitsjack",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height={16}
        width={16}
      >
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    url: "https://github.com/jackcrane",
    handle: "jackcrane",
  },
  {
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
      >
        <title>Discord</title>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
    handle: "improper-adjectives#0597",
  },
];

export default () => {
  const options = [
    "student",
    "student",
    "student",
    "developer",
    "developer",
    "teacher",
    "teacher",
    "designer",
    "artist",
    "skiier",
    "runner",
    "cook",
    "pilot",
  ];

  const [mouse, ref] = useMouse();

  // Select a skill based on mouse position (x+y). Be sure to mod by the length of the array.
  const [skill, setSkill] = React.useState(options[0]);
  useEffect(() => {
    setSkill(
      options[Math.floor((mouse.x * 1.3 + mouse.y * 1.7) / 20) % options.length]
    );
  }, [mouse]);

  return (
    <div ref={ref}>
      <Nav>
        <SignatureImage src={signature} />
        <P className="hos-500">Jack Crane</P>
        <A href="https://resume.jackcrane.rocks">Resume</A>
        <A href="https://blog.jackcrane.rocks">Blog</A>
        <FlexSpacer className="hos-350" />
        <A className="hos-350" href="https://github.com/jackcrane">
          Github
        </A>
      </Nav>
      <Content>
        <Split>
          <PaddedSplitSection>
            <ProfileImage src={profile} />
            <H1>Hello! I'm Jack</H1>
          </PaddedSplitSection>
          <PaddedSplitSection>
            <H2>
              Im a{skill[0] === "a" ? "n " : ""} {skill} from Cincinnati
            </H2>
            <Secondary>
              I love creating great digital and physical projects. I'm a
              lifelong learner with a passion for picking up new skills and
              technologies.
            </Secondary>
            <Spacer />
            <Row gap={"8px"}>
              <ActionButton>Projects</ActionButton>
              <MutedActionButton href="https://resume.jackcrane.rocks">
                Resume
              </MutedActionButton>
            </Row>
          </PaddedSplitSection>
        </Split>
      </Content>
      <CalloutSection>
        <Content>
          <Split style={{ alignItems: "flex-start" }}>
            <SplitSection>
              <H3>Working Experience</H3>
              <Spacer size={8} />
              <List>
                {work.map((work, i) => (
                  <ListItem key={i}>
                    <Row gap={"8px"}>
                      <ListImage src={work.icon} />
                      <div>
                        <ListHeading>{work.company}</ListHeading>
                        <Spacer size={4} />
                        <ListText>{work.title}</ListText>
                      </div>
                    </Row>
                  </ListItem>
                ))}
              </List>
            </SplitSection>
            <SplitSection>
              <H3>Awards & Recognition</H3>
              <Spacer size={8} />
              <List>
                {awards.map((awards, i) => (
                  <ListItem key={i}>
                    <Row gap={"8px"}>
                      <ListImage src={awards.icon} />
                      <div>
                        <ListHeading>{awards.title}</ListHeading>
                        <Spacer size={4} />
                        <ListText>{awards.description}</ListText>
                      </div>
                    </Row>
                  </ListItem>
                ))}
              </List>
            </SplitSection>
          </Split>
        </Content>
      </CalloutSection>
      <Content>
        <H3>Projects</H3>
        <Spacer size={16} />
        <GridContainer>
          {projects.map((project, i) => (
            <GridCell key={i}>
              <ProjectImage src={project.image} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <Spacer size={8} />
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.links && (
                <>
                  <Spacer size={8} />
                  <Row gap={"8px"}>
                    {project.links.map((link, i) => (
                      <A key={i} href={link.url}>
                        {link.title}
                      </A>
                    ))}
                  </Row>
                </>
              )}
            </GridCell>
          ))}
        </GridContainer>
      </Content>
      <Spacer size={32} />
      <CalloutSection style={{ position: "relative", overflow: "hidden" }}>
        <Content>
          <H3>Get in touch</H3>
          <Spacer size={8} />
          {socials.map((social, i) => (
            <Row key={i} gap={"8px"}>
              <A href={social.url}>
                <Row gap={"8px"}>
                  {social.icon}
                  {social.handle}
                </Row>
              </A>
            </Row>
          ))}
        </Content>
        <SignatureFooterImage src={signature} />
      </CalloutSection>
    </div>
  );
};
