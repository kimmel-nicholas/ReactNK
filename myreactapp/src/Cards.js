import React from "react"
import { Button, Card, CardBody, CardText, CardTitle, Fade } from 'reactstrap';
import TextForCards from "./TextForCards";

const Cards = (props) => {
  return (
    <>
      <Card key="firstCard" className="display-3">
        <CardBody>
          <CardTitle>
            Click to see a number
          </CardTitle>
          <Button onClick={() => props.cardOneState()}> Button </Button>
          <Fade in={props.fade1} className="my-2">
            {props.fade1 ? <CardText>
              <TextForCards cardNum={1} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>
      <Card key="secondCard" className="display-3">
        <CardBody>
          <CardTitle>
            No, click here to see a number
          </CardTitle>
          <Button onClick={() => props.cardTwoState()}> Button </Button>
          <Fade in={props.fade2} className="my-2">
            {props.fade2 ? <CardText>
              <TextForCards cardNum={2} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>
      <Card key="thirdCard" className="display-3">
        <CardBody>
          <CardTitle>
            Wait, click here to see a number
          </CardTitle>
          <Button onClick={() => props.cardThreeState()}> Button </Button>
          <Fade in={props.fade3} className="my-2">
            {props.fade3 ? <CardText>
              <TextForCards cardNum={3} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>
      <Card key="fourthCard" className="display-3">
        <CardBody>
          <CardTitle>
            Just click here already
          </CardTitle>
          <Button onClick={() => props.cardFourState()}> Button </Button>
          <Fade in={props.fade4} className="my-2">
            {props.fade4 ? <CardText>
              <TextForCards cardNum={4} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>
      <Card key="fifthCard" className="display-3">
        <CardBody>
          <CardTitle>
            I don't want to be clicked
          </CardTitle>
          <Button onClick={() => props.cardFiveState()}> Button </Button>
          <Fade in={props.fade5} className="my-2">
            {props.fade5 ? <CardText>
              <TextForCards cardNum={5} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>
      <Card key="sixthCard" className="display-3">
        <CardBody>
          <CardTitle>
            I'm just happy to be here
          </CardTitle>
          <Button onClick={() => props.cardSixState()}> Button </Button>
          <Fade in={props.fade6} className="my-2">
            {props.fade6 ? <CardText>
              <TextForCards cardNum={6} />
            </CardText> : null }
          </Fade>
        </CardBody>
      </Card>

    </>
  )
}

export default Cards;