import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Box bg="#174c43" width="100%">
        <Box
          display="flex"
          width="80%"
          p={10}
          justifyContent="space-around"
          margin="auto"
        >
          <Box>
            <Heading as="h1" size="2xl" color="whiteAlpha.800">
              Stop guessing what to say.
            </Heading>
            <Box mt="2" textAlign="justify">
              <Text fontSize="x-large" color="whiteAlpha.800">
                Lately's AI learns which words will get you the most<br></br>
                enagagement and repurposes video, audio and text <br></br>
                dozens of social posts that contain those words.
              </Text>
              <Button
                variant={"ghost"}
                border="1px solid #00c682"
                color="whiteAlpha.800"
                mt={5}
              >
                TRY IT FREE
              </Button>
            </Box>
          </Box>
          <Box>
            <Image
              objectFit="contain"
              width="280px"
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61f2c835efdcde7733f5dcba_flagkately-p-500.png"
            />
          </Box>
        </Box>
      </Box>

      <Box width="80%" margin="auto" p={5}>
        <HStack alignItems="center" spacing={8}>
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899d43bfa7a25f8fd57_logo_amerifirst_x.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8992c91187ad248ca38_logo_vayner_x.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf8995d4cba780af3d126_logo_husky_x.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdfb04119999916a1844b1_logo_sap_x3.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899f52edc178bc1bae6_logo_dhl_x.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6054c974c47a07d324e73c9a_pwc3.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6127a82ecc42c1a55293539e_googlecloud.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5ffdf899fdfd512e168afc71_logo_ss_x.png"
          />
          <Image
            width="100px"
            src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60913dc77992896344096de0_sy-p-2000.png"
          />
        </HStack>
      </Box>
      <Box height="450px" bg="#e8f8f2">
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <Box marginTop="5%">
            <AspectRatio width="650px" ratio={2}>
              <iframe src="https://cdnlately-v3.s3.amazonaws.com/lately_looping.mp4" />
            </AspectRatio>
          </Box>
          <Box>
            <Heading color="#133d36">How it works.</Heading>
            <Text>
              First, Lately's artificial intelligence<br></br>
              studies what your social Media audience<br></br>
              wants to watch, hear or read and then<br></br>
              builds you a custom writing model,<br></br>
              based on what it learns.
            </Text>
            <br />
            <Text>
              Then it uses that writing model to<br></br>
              automatically repurpose any longform<br></br>
              video, audio or text into DOZENS of<br></br>
              pre-tested social media posts, based<br></br>
              on what it learns. (Yes, Way!)
            </Text>
          </Box>
        </Box>
      </Box>
      <Box height="auto">
        <Box width="80%" margin="auto" mt={6}>
          <Heading textAlign="center" color="rgb(23,76,67)" mb={14}>
            AI-generated results that don't muck around
          </Heading>
          <HStack spacing={5} mt={5}>
            <Box ml={10}>
              <HStack spacing={5}>
                <Box>
                  <Image
                    width="160px"
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/6002236421b928e945df4385_stat4.png"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="2xl" color="rgb(23,76,67)">
                    Generate Social Content<br></br> the New Way
                  </Text>
                  <Text mt={2}>
                    Stop guessing what to write. Lately's<br></br>
                    AI creates organic social media<br></br>
                    content that it already knows your<br></br>
                    audience will love.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box>
              <HStack spacing={5}>
                <Box>
                  <Image
                    width="160px"
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/60022364b4348190da308534_stat3.png"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="2xl" color="rgb(23,76,67)">
                    Unlock the Power of<br></br>Longform Content
                  </Text>
                  <Text mt={2}>
                    Automatically atomize any longform<br></br>
                    video, audio,or text into dozens of pre-<br></br>
                    tested social media posts designed to<br></br>
                    magnify engagement.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </HStack>

          <HStack spacing={10} mt={5}>
            <Box ml={10}>
              <HStack spacing={5}>
                <Box>
                  <Image
                    width="160px"
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223648dc79dc41d78513f_stat2.png"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="xl" color="rgb(23,76,67)">
                    Social Selling on Steroids
                  </Text>
                  <Text mt={2}>
                    Generate consistent, engaging<br></br>
                    content that converts high-quality<br></br>
                    leads for employees who don't know<br></br>
                    dang thing about copywriting.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box>
              <HStack spacing={5}>
                <Box>
                  <Image
                    width="160px"
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/600223649f9648efb7abb3d3_stat_1.png"
                  />
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="2xl" color="rgb(23,76,67)">
                    Game-Changing AI Insights
                  </Text>
                  <Text mt={2}>
                    Learn the key words, phrases and<br></br>
                    values that make up the messaging<br></br>
                    your brand's audience actually wants to<br></br>
                    Watch, hear or read.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Box
          p={2}
          textAlign="center"
          bg="#e8f8f2"
          width="60%"
          margin="auto"
          mt={20}
        >
          <Heading as="h4" fontSize="2xl">
            AI generator available in:
          </Heading>
          <Text p={2} letterSpacing={1}>
            <span style={{ fontSize: "12px" }}>US</span>English,{" "}
            <span style={{ fontSize: "12px" }}>ES</span>Spanish,{" "}
            <span style={{ fontSize: "12px" }}>IT</span>Italian,{" "}
            <span style={{ fontSize: "12px" }}>PT</span>Portuguese,{" "}
            <span style={{ fontSize: "12px" }}>JP</span>Japanese,{" "}
            <span style={{ fontSize: "12px" }}>DE</span>German, and more - just
            ask!
          </Text>
        </Box>
      </Box>
      <Box bg="#e8f8f2" mt={10} height="auto">
        <Box
          width="80%"
          margin="auto"
          display="flex"
          justifyContent="space-around"
          p={10}
        >
          <Box>
            <Image
              width="300px"
              src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61c1fcb478083ac00ef63308_heart.png"
            />
          </Box>
          <Box>
            <Text
              letterSpacing={1}
              fontSize="4xl"
              fontWeight="semibold"
              lineHeight="40px"
            >
              Magnify your sales and<br></br>
              marketing copy with AI that<br></br> writes for people, not
              targets.
            </Text>
            <Text mt={3}>
              The right words turn customers into evangelists. So aim higher
              with<br></br>
              artificial intelligence that generates
              high-performing,transformative,<br></br> social media content.
            </Text>
            <Link to="">
              <Button mt={5} bg={"#00c66b"} color="whiteAlpha.800">
                GIVE IT A WHIRL
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Image
        width="80px"
        marginTop="-20"
        position="relative"
        left="150px"
        top="9"
        src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/5fd7b374b200124961cb94ac_home-quote-icon.png"
      />
      <Box bg="#174c43">
        <Box width="80%" margin="auto" p="50px">
          <Text
            color="#00c66b"
            fontSize="4xl"
            lineHeight="45px"
            fontWeight="bold"
            letterSpacing="1px"
          >
            Generate meaningful words that convert with <br></br>the world's
            most human AI
          </Text>
          <Text color="whiteAlpha.900" mt={4} fontSize="2xl">
            <span style={{ fontStyle: "italic" }}>"Instead of guessing</span>{" "}
            what messages might stick in a vacuum, Lately's AI counts up
            <br></br>all the digital engagement breadcrumbs left behind and{" "}
            <span style={{ fontWeight: "bold" }}>predicts</span> what new
            <br></br>messages are most likely to get noticed. Brilliant".
          </Text>
          <Box display="flex" gap={10} mt={5}>
            <Box>
              <HStack spacing={5}>
                <Box>
                  <Image
                    boxSize="100"
                    borderRadius="50"
                    src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d9fcf3e4c4a4f82bb64_erics-p-500.png"
                  />
                </Box>
                <Box>
                  <Text color="whiteAlpha.900" fontWeight="bold">
                    Eric Schwartzman
                  </Text>
                  <Text color="whiteAlpha.900">
                    Best-selling author and marketing consultant to Boeing, City
                    National Bank, Hard Rock,<br></br>Johnson & Johnson,
                    Lucasfilm, Olympics, US Dept. of State and dozens of small
                    and<br></br> medium business.
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box>
              <Image
                width="150px"
                src="https://global-uploads.webflow.com/5fd3c52ce5bc147a1f007ca4/61ca0d28b9e99b6ab737d081_esass-p-500.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
