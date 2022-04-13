import { useEffect, useState } from "react";
import { Card, Grid, Button, Image } from "@nextui-org/react";
import { useRouter } from 'next/router'
import Progress from "../components/Progress";
import CardContent from "../components/CardContent";
import { useMediaQuery } from '../hooks/useMediaQuery'

const images = [
  "https://dgh3t0irkf4qk.cloudfront.net/public/81445abb-d2bf-49d3-ab1b-5916296b26571648154823454",
  "https://dgh3t0irkf4qk.cloudfront.net/public/3ecbc810-0225-479e-9431-d80678da3c451648154823455",
  "https://unsplash.it/1920/1200?id=3",
  "https://unsplash.it/1920/1200?id=4",
  "https://unsplash.it/1920/1200?id=5"
];

export default function Story() {
  const router = useRouter()
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery(650)

  const activeSlide = (index) => {
    setActive(index);
  };

  const next = () => {
    if (active < images.length - 1) {
      activeSlide(active + 1);
    } else {
      activeSlide(0);
    }
  };

  useEffect(() => {
    let timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <>
      {
        <Button
          auto
          color="error"
          icon={<Image
            src="images/close_circled_icon.svg"
            alt="Default Image"
            width={30}
            height={30}
          />}
          css={{
            position: 'fixed',
            left: '10px',
            top: isMobile ? '35px' : '10px',
            zIndex: '999',
          }}
          onClick={() => {
            router.push('/')
          }}
        />
      }
      <Grid.Container
        gap={2}
        justify="center"
        css={{
          "@xsMax": {
            px: 0
          }
        }}
      >
        <Grid
          css={{
            "@initial": {
              maxW: "460px"
            },
            "@xsMax": {
              maxW: "100%",
              p: 0
            }
          }}
        >
          <Card
            cover
            css={{
              "@xsMax": {
                br: 0
              }
            }}
          >
            <Card.Header
              css={{
                position: "absolute"
              }}
            >
              {[...Array(images.length).keys()].map((key) => (
                <Progress key={key} active={key === active} />
              ))}
            </Card.Header>
            {images.map((image, key) => (
              <Card.Image
                key={key}
                width="100%"
                height="100%"
                src={image}
                autoResize={false}
                active={key === active}
                alt="Card image background"
                containerCss={{
                  d: key === active ? "block" : "none",
                  height: "100%",
                  maxHeight: "90vh",
                  aspectRatio: 1 / 2,
                  "@xsMax": {
                    br: 0,
                    minHeight: "100vh"
                  }
                }}
              />
            ))}
            <Card.Footer
              css={{
                zIndex: 1,
                position: "absolute",
                p: "$md $lg",
                bottom: 0,
                left: 0,
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(255, 255, 255, 0) 100%)",
                "@xsMax": {
                  p: "$lg $12"
                }
              }}
            >
              <CardContent storyButton />
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
