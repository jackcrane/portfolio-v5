import React, { useEffect, useState } from "react";
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
  Container,
  ContentContainer,
  PopoutContainer,
  Info,
  Grow,
  Collapse,
  H4,
  Hr,
  Ul,
  Tag,
} from "./kit";
import TextTransition, { presets } from "react-text-transition";
import signature from "../images/signature.png";
import profile from "../images/ski.png";
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
import _2d23d2 from "../images/2d23d2.png";
import eventPilot from "../images/eventpilot.png";
import numberImage from "../images/fluid-sim-numbers.png";
import paddlefestVolunteer from "../images/paddlefest-volunteer.png";
import paddlefestAdmin from "../images/paddlefest-admin.png";
import robot from "../images/robot.png";
import mts from "../images/mts.png";
import amp from "../images/amp.png";
import rmp from "../images/rmp.png";
import designForPrint from "../images/designing-for-print.png";
import voxPrint from "../images/vox-print.png";
import crossword from "../images/crossword.png";

const awards = [
  {
    title: "Presidential Volunteer Service Award",
    description: "5x award recipient for contributions to STEM education",
    icon: presidentsAward,
    detail:
      "The Presidential Volunteer Service Award is a national recognition program in the United States that honors individuals and groups for their commitment to volunteerism and community service. It is awarded based on the number of volunteer hours completed within a 12-month period, with different levels (bronze, silver, and gold) acknowledging varying hours of service. Recipients receive a certificate, an official medallion, and a congratulatory letter from the President of the United States.",
    agency: "The President of the United States",
  },
  {
    title: "FIRST Deans List finalist",
    description: "Awarded Ohio's top leadership award through FIRST Robotics",
    icon: ftc,
    detail:
      "The FTC Dean's List is a prestigious recognition within the FIRST Tech Challenge program, celebrating high school students who demonstrate exceptional leadership, dedication, and contributions to their teams and communities. Awardees are role models who inspire their peers through outstanding technical expertise, effective communication, and a passion for promoting STEM education. This honor highlights their ability to lead with integrity, foster collaboration, and advance the mission of FIRST both on and off the competition field.",
    agency: "FIRST Tech Challenge",
  },
  {
    title: "Private Pilot's License",
    description:
      "Passed my PPL checkride on my 17th birthday, the earliest legally possible",
    icon: faa,
    detail:
      "A Private Pilot's License (PPL) is a certification that allows individuals to operate an aircraft for personal or recreational purposes but not for compensation or hire. It requires completing flight training, passing a written knowledge test, and demonstrating proficiency in flight maneuvers and navigation during a practical flight exam. The license enables pilots to carry passengers and fly under specific conditions, expanding their freedom to explore aviation while adhering to safety and regulatory standards.",
    agency: "Federal Aviation Administration",
  },
  {
    title: "Volunteer of the Year",
    description:
      "Awarded for my work as volunteer coordinator for Ohio River Paddlefest",
    icon: oac,
    detail:
      "Adventure Crew is a nonprofit organization in Cincinnati dedicated to connecting city teens with nature and each other through engaging outdoor adventures. Founded in 2013, it serves nearly 1,000 students across 30 schools in Greater Cincinnati and Northern Kentucky, including all Cincinnati Public Schools high schools and select middle schools. ￼ The organization offers monthly adventures such as kayaking, hiking, biking, and skiing at no cost to participants, aiming to foster personal growth, environmental stewardship, and a lifelong appreciation for the outdoors. ￼",
    agency: "Adventure Crew",
  },
  {
    title: "Excellence in Technology Award",
    description:
      "Awarded by my high school for my work launching and leading our robotics team",
    icon: scd,
    detail:
      "The Excellence in Technology Award is presented to a student at the Summit Country Day for outstanding achievement in the field of technology. The award is given to students who have demonstrated exceptional leadership, creativity, and innovation in their technology endeavors. This award recognizes the significant contributions made by students in their respective fields and encourages them to continue pursuing their passion for technology.",
    agency: "The Summit Country Day School",
  },
];

const work = [
  {
    company: "SLU Department of Mechanical Engineering",
    title: "Engineering Fundamentals lead TA",
    icon: slu,
    description:
      'I am working with the SLU Mechanical Engineering department to help teach the "ESCI 1701" Engineering Fundamentals Studio course, teaching students an introduction to engineering design through an introduction to Solidworks and technical drawing.',
    bullets: [
      'Taught students the basics of understanding Engineering design by directing them through a series of projects to help them understand "design intent".',
      "Gave students their first taste in Solidworks and technical drawing, helping them begin thinking in 3d.",
    ],
  },
  {
    company: "SLU Center for Additive Manufacturing",
    title: "Undergraduate Research Adjacent",
    icon: slu,
    description:
      "At the Saint Louis University Center for Additive Manufacturing, I am working to build out our understanding of Resin printing while learning about engineering for additive manufacturing, performing engineering analysis on models, and pre- and post- processing 3d prints to the highest quality for research labs in the university or other clients.",
    bullets: [
      "Spearheaded our initiative to better understand and optimize our Resin 3d printing processes",
      "Created a custom 3d print dashboard to monitor and control our quality as we refined our processes",
      "Built a custom timelapse PCB to record high-quality videos",
    ],
  },
  {
    company: "Differential Development Shop",
    title: "Co-Op Software Engineer",
    icon: di,
    description:
      "I co-op'd at Differential on the Apollos team, developing mobile apps for megachurches. As part of the Frontend team, I played a key role in constructing our React Native template. Over the process of 31 merged PRs, I drove a feature that secured 3 clients, contributing to over $100k in revenue.",
    bullets: [
      "One of 3 frontend React Native developers, but branched into fullstack",
      "31 merged Pull Requests over summer",
      "Built out a feature that earned Apollos 3 new clients, resulting in $100k+ revenue",
    ],
  },
  {
    company: "iSPACE STEM",
    title: "STEM Teacher & Curriculum Developer",
    icon: ispace,
    description:
      "Taught camps to students ages K-12 focused around STEM, including Robotics, Scratch & Python programming, Chemistry, and Physics. Over six years, I taught over 35 weeks of camp, teaching an estimated 700 students. I was awarded the Presidential Volunteer Service Award five times because of my volunteer work at iSPACE.",
    bullets: [
      "Taught over 35 weeks of camp, teaching an estimated 700 students",
      "Awarded the Presidential Volunteer Service Award five times because of my volunteer work at iSPACE",
      "Taught classes in chemistry, physics, robotics, web development, Python, and Scratch focused camps.",
    ],
  },
  {
    company: "Perfect North Slopes",
    title: "Kids Ski Instructor",
    icon: pns,
    description:
      "Taught ski lessons for kids ages 5-12. This job refined my teaching skills over my experience of taking over 300 kids who have never been on the snow before to their first chairlift ride and farther. I learned invaluable leadership and education skills while teaching kids my passion.",
    bullets: [
      "Taught ski lessons for kids ages 5-12",
      "Took over 300 kids who have never been on the snow before to their first chairlift ride and farther",
      "Learned invaluable leadership and education skills while teaching kids my passion",
    ],
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
    ],
    tags: ["Software", "Large-Scale"],
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
    ],
    tags: ["Software", "Serverless"],
  },
  {
    title: "CoreDesk",
    description:
      "CoreDesk is a project for SLU Center for Additive Manufacturing as a home grown project management and project submission system.",
    image: sluop,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/slu-open-project",
      },
    ],
    tags: ["Software", "Project Management"],
  },
  {
    title: "MTS Xpress",
    description:
      "MTS Express is a mobile app for Myers Tire Supply that allows sales reps to quickly and easily order new products for their customers via a barcode scanner, cart management, and database integration.",
    image: mtsx,
    tags: ["Software", "Native", "Commercial"],
  },
  {
    title: "Paddlefest Volunteer Registration",
    description:
      "A web platform for registering and managing volunteers for Ohio River Paddlefest.",
    image: paddlefestVolunteer,
    tags: ["Software", "Large-Scale"],
  },
  {
    title: "Paddlefest Volunteer Admin",
    description:
      "An admin dashboard for Paddlefest administration to manage volunteers. (Names and PII redacted for privacy)",
    image: paddlefestAdmin,
    tags: ["Software", "Large-Scale"],
  },
  {
    title: "MTS Rep Management System",
    description:
      "A web platform for Myers Tire Supply's reps to view and understand their sales, unlocking improved performance. (Names and numbers redacted for privacy)",
    image: mts,
    tags: ["Software", "Commercial"],
  },
  {
    title: "2d23d2",
    description:
      "A program inspired by Stratasys' 2d23d program that projects a 2d image into a 3d model for polyjet 3d printing on textiles. Takes in an image and outputs a colored 3d model.",
    image: _2d23d2,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/2d23d2",
      },
      {
        title: "Live site",
        url: "https://2d23d2.jackcrane.rocks",
      },
    ],
    tags: ["Software", "3d Printing", "3d Software Dev"],
  },
  {
    title: "EventPilot",
    description:
      "A complete event management platform built for medium to large size events like 5k's, marathons, conferences, etc. Built in order to arm event management teams with never-before-accessible tools to manage, grow, and understand their events.",
    image: eventPilot,
    tags: ["Software", "Large-Scale"],
  },
  {
    title: "FIRST Tech Challenge Robotics",
    description:
      "Founded and captained high school a team to state championship, Participated in the world championship. Earned highest individual leadership award in Ohio, awards for teamwork, sportsmanship, documentation, software, and hardware design",
    image: robot,
    links: [
      {
        title: "Build Section",
        url: "https://cdn.jackcrane.rocks/14365%20Build%20Section.pdf",
      },
      {
        title: "Engineering Notebook",
        url: "https://jack-general.nyc3.cdn.digitaloceanspaces.com/Engineering%20Notebook%20-%20General%20-%20ocr.pdf",
      },
    ],
    tags: ["Hardware", "Technical Writing", "Leadership"],
  },
  {
    title: "Apple Music Presence",
    description:
      "73 GitHub stars, 4 forks, and roughly 200 new users per month; Built on Node.js and S3; Over 400,000 listens registered",
    image: amp,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/apple-music-presence",
      },
    ],
    tags: ["Software", "Large-Scale"],
  },
  {
    title: "Rate My Professors X Courses@SLU",
    description:
      "A tiny extension that adds rate my professors ratings to the SLU course registration catalog",
    image: rmp,
    links: [
      {
        title: "Github",
        url: "https://github.com/jackcrane/ratemyprofessors-x-slu",
      },
      {
        title: "Web Store Link",
        url: "https://chromewebstore.google.com/detail/rate-my-professors-x-cour/ogbakaenhgeecccinojnmkdegeonkodg?authuser=0&hl=en",
      },
    ],
    tags: ["Software", "Chrome Extension"],
  },
  {
    title: "Designing for Print",
    description:
      "A guide communicating my experiences in optimizing CAD designs for FDM 3d printing. Focus on technical writing and illustrations.",
    image: designForPrint,
    links: [
      {
        title: "Document PDF",
        url: "https://cdn.jackcrane.rocks/designing-for-print.pdf",
      },
    ],
    tags: ["Technical Writing", "3d Printing"],
  },
  {
    title: "SSH Games",
    description:
      "An SSH server that runs a collection of games including sudoku, tik-tak-toe, and crossword puzzles. Try it now with 'ssh crossword@games.jackcrane.rocks'",
    image: crossword,
    links: [],
    tags: ["Games"],
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

const publications = [
  {
    journal: "For∀ll Math Magazine",
    title:
      "Visualizing machine learning by classifying number images with a fluid simulation",
    links: [
      {
        title: "Paper PDF",
        url: "https://github.com/jackcrane/fluid-number-classification/blob/main/Visualizing%20Machine%20Learning%20by%20Classifying%20Number%20Images%20with%20a%20Fluid%20Simulation.pdf",
      },
      {
        title: "Github",
        url: "https://github.com/jackcrane/fluid-number-classification",
      },
      {
        title: "Full Publication",
        url: "https://forallmathmagazine.com/wp-content/uploads/2025/03/forall-volume-3-issue-1.pdf",
      },
    ],
    description:
      "An exploration into visualizing machine learning with a fluid simulation. Published in the Saint Louis University FOR∀LL Math Magazine.",
    tags: ["Software", "Technical Writing", "Algorithms"],
    image: numberImage,
  },
  {
    journal: "Saint Louis University Center for Additive Manufacturing",
    title: "Translating images into Voxel Print-ready slices",
    links: [
      {
        title: "Paper PDF",
        url: "https://sites.google.com/slu.edu/slu-cam/voxel-print-wp",
      },
    ],
    tags: ["Software", "3d Printing", "3d Software Dev"],
    image: voxPrint,
    description:
      "This whitepaper covers the process of ingesting images and converting them to 'slice' files ready for the Stratasys PolyJet Voxel Print system.",
  },
];

const Skill = () => {
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

  // Select a skill based on mouse position (x+y). Be sure to mod by the length of the array.
  const [skill, setSkill] = useState(options[0]);
  useEffect(() => {
    // Pick random skill
    setInterval(() => {
      setSkill(options[Math.floor(Math.random() * options.length)]);
    }, 1500);
  }, []);

  return (
    <H2>
      Im a{skill[0] === "a" ? "n " : ""}{" "}
      <span
        style={{
          display: "inline-block",
        }}
      >
        <TextTransition
          springConfig={presets.gentle}
          style={{ position: "relative" }}
        >
          {skill}
        </TextTransition>
      </span>{" "}
      from Cincinnati
    </H2>
  );
};

export default () => {
  const [popout, setPopout] = useState(false);
  const [popoutType, setPopoutType] = useState(null);

  const flatTags = new Set(projects.flatMap((project) => project.tags));
  const [selectedTags, setSelectedTags] = useState(() => new Set(flatTags));

  const handleTagClick = (tag) => {
    if (selectedTags.size === flatTags.size) {
      // from initial all selected, pick only this one
      setSelectedTags(new Set([tag]));
    } else {
      const newSet = new Set(selectedTags);
      if (newSet.has(tag)) {
        newSet.delete(tag);
        // if no tags remain, reset to all
        if (newSet.size === 0) {
          setSelectedTags(new Set(flatTags));
          return;
        }
      } else {
        newSet.add(tag);
      }
      setSelectedTags(newSet);
    }
  };

  // filter projects by any selected tag
  const displayedProjects = projects.filter((project) =>
    project.tags.some((tag) => selectedTags.has(tag)),
  );

  return (
    <Container popout={popout}>
      <ContentContainer popout={popout}>
        {/* <button onClick={() => setPopout(!popout)}>Toggle</button> */}
        <Nav>
          <SignatureImage src={signature} alt={"JC Signature"} />
          <P className="hos-500">Jack Crane</P>
          <A href="https://resume.jackcrane.rocks">Resume</A>
          {/* <A href="https://blog.jackcrane.rocks">Blog</A> */}
          <FlexSpacer className="m-hos-750" />
          <A className="m-hos-750" href="mailto:jack@jackcrane.rocks">
            jack@jackcrane.rocks
          </A>
          <FlexSpacer className="hos-350" />
          <A className="hos-350" href="https://github.com/jackcrane">
            Github
          </A>
        </Nav>
        <Content>
          <Split>
            <PaddedSplitSection>
              <ProfileImage
                src={profile}
                alt={
                  "A picture of Jack on skis standing at the top of Breckenridge."
                }
              />
              <H1>Hello! I'm Jack</H1>
            </PaddedSplitSection>
            <PaddedSplitSection
              style={{
                padding: 0,
                minHeight: 210,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Skill />
              <Secondary>
                I love creating great digital and physical projects. I'm a
                lifelong learner with a passion for picking up new skills and
                technologies.
              </Secondary>
              <Spacer />
              <Row gap={"8px"}>
                <ActionButton href="#projects">Projects</ActionButton>
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
                <H3>Work Experience</H3>
                <Spacer size={8} />
                <List>
                  {work.map((work, i) => (
                    <ListItem key={i}>
                      <Row gap={"8px"}>
                        <ListImage src={work.icon} alt={work.company} />
                        <div>
                          <ListHeading>{work.company}</ListHeading>
                          <Spacer size={4} />
                          <ListText>{work.title}</ListText>
                        </div>
                        <Grow />
                        <Info
                          onClick={() => {
                            setPopout(work);
                            setPopoutType("WORK");
                          }}
                        />
                      </Row>
                    </ListItem>
                  ))}
                </List>
              </SplitSection>
              <SplitSection>
                <H3>Awards & Recognition</H3>
                <Spacer size={8} />
                <List>
                  {awards.map((award, i) => (
                    <ListItem key={i}>
                      <Row gap={"8px"}>
                        <ListImage src={award.icon} alt={award.title} />
                        <div>
                          <ListHeading>{award.title}</ListHeading>
                          <Spacer size={4} />
                          <ListText>{award.description}</ListText>
                        </div>
                        <Grow />
                        <Info
                          onClick={() => {
                            setPopout(award);
                            setPopoutType("AWARD");
                          }}
                        />
                      </Row>
                    </ListItem>
                  ))}
                </List>
              </SplitSection>
            </Split>
          </Content>
        </CalloutSection>
        <Content>
          <H3 id="projects">Projects</H3>
          <Row gap={"4px"} style={{ flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.75rem" }}>Pick tags:</span>
            {Array.from(flatTags).map((tag, i) => (
              <Tag
                key={i}
                selected={selectedTags.has(tag)}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Tag>
            ))}
          </Row>
          <Spacer size={16} />
          <GridContainer>
            {displayedProjects.map((project, i) => (
              <GridCell key={i}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle>{project.title}</ProjectTitle>
                <Spacer size={8} />
                <Row gap={"4px"} style={{ flexWrap: "wrap" }}>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </Row>
                <Spacer size={8} />
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.links && (
                  <>
                    <Spacer size={8} />
                    <Row gap={"8px"} style={{ flexWrap: "wrap" }}>
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
          {selectedTags.size < flatTags.size &&
            displayedProjects.length > 0 && (
              <P style={{ textAlign: "center" }}>
                Some projects are hidden because of the tags you have picked.{" "}
                <A
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTags(new Set(flatTags));
                  }}
                >
                  Show all projects
                </A>
              </P>
            )}
          {displayedProjects.length === 0 && (
            <P style={{ textAlign: "center" }}>
              No projects found with selected tags.{" "}
              <A
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTags(new Set(flatTags));
                }}
              >
                Show all projects
              </A>
            </P>
          )}
        </Content>
        <Spacer size={32} />
        <div>
          <Content>
            <H3 id="publications">Publications</H3>
            <GridContainer>
              {publications.map((publication, i) => (
                <GridCell key={i}>
                  <ProjectImage
                    src={publication.image}
                    alt={publication.title}
                  />
                  <ProjectTitle>{publication.title}</ProjectTitle>
                  <Spacer size={8} />
                  <Row gap={"4px"} style={{ flexWrap: "wrap" }}>
                    {publication.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </Row>
                  <Spacer size={8} />
                  <ProjectDescription>
                    {publication.description}
                  </ProjectDescription>
                  {publication.links && (
                    <>
                      <Spacer size={8} />
                      <Row gap={"8px"} style={{ flexWrap: "wrap" }}>
                        {publication.links.map((link, i) => (
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
        </div>
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
          <SignatureFooterImage src={signature} alt={"JC Signature"} />
        </CalloutSection>
      </ContentContainer>
      <PopoutContainer popout={popout}>
        <Row>
          <Grow />
          <Collapse onClick={() => setPopout(false)} />
        </Row>
        <Spacer size={16} />
        {popout && <PopoutElement work={popout} type={popoutType} />}
      </PopoutContainer>
    </Container>
  );
};

const PopoutElement = ({ work, type }) => {
  if (type === "WORK")
    return (
      <div>
        <TextTransition springConfig={presets.default}>
          <div
            style={{
              height: "calc(100vh - 32px - 24px - 16px)",
              width: "calc(clamp(300px, 20%, 350px) - 16px)",
              overflow: "auto",
            }}
          >
            <H3>{work.company}</H3>
            <Spacer size={12} />
            <H4>{work.title}</H4>
            <Hr />
            <p>{work.description}</p>
            <Hr />
            <Ul>
              {work.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </Ul>
          </div>
        </TextTransition>
      </div>
    );

  if (type === "AWARD")
    return (
      <div>
        <TextTransition springConfig={presets.default}>
          <div
            style={{
              height: "calc(100vh - 32px - 24px - 16px)",
              width: "calc(clamp(300px, 20%, 350px) - 16px)",
              overflow: "auto",
            }}
          >
            <H3>{work.title}</H3>
            <Spacer size={12} />
            <H4>{work.agency}</H4>
            <Hr />
            <p>{work.description}</p>
            <Hr />
            <p>{work.detail}</p>
            {/* <Ul>
              {work.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </Ul> */}
          </div>
        </TextTransition>
      </div>
    );
};
