import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import YouTube from 'react-youtube';

import { IClassRoom } from '../../../interfaces';
import s from './ClassRoom.module.scss';

enum ContentTypes {
  video = 'video',
  link = 'link',
}

interface State {
  id: string;
  type: string;
  link: string;
  title: string;
}

const getContent = ({ type, link, title }: State) => {
  if (type === ContentTypes.video) {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube
        videoId={link}
        // @ts-ignore
        opts={opts}
      />
    )
  }

  if (type === ContentTypes.link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">{title}</a>
    )
  }

  return null;
};

const ClassRoom = ({ title, description, date, links }: IClassRoom) => {
  const [content, setContent] = useState({
    id: '',
    type: '',
    link: '',
    title: ''
  });

  const onClick = ({ id, title, link, type }: State) => () => {
    const value = {
      id,
      title,
      link,
      type,
    };
    setContent(value);
  };

  return (
    <Container>
      <div className={s.header}>
        <h1>{title}</h1>
        <div className={s.date}>{date}</div>
      </div>
      <div className={s.description}>{description}</div>
      {links.length !== 0 && (
        <Row>
          <Col xs="12" md="4">
            <ListGroup>
              {links.map(({ id, title, link, type }) => (
                <ListGroupItem
                  key={id}
                  onClick={onClick({ id, title, link, type })}
                  active={id === content.id}
                >{title}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col xs="12" md="8">
            <div className={s.mediaTabContent}>
              {getContent(content)}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ClassRoom;
