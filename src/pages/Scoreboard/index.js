import React, { useEffect } from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllScoresbyCategory,
  fetchAllCategories,
} from "../../store/scores/actions";
import { selectScores } from "../../store/scores/selector";
import "./index.css";

export default function Scoreboard() {
  const dispatch = useDispatch();
  const {
    flagCatScores,
    countryCatScores,
    europeCatScores,
    categories,
  } = useSelector(selectScores);

  useEffect(() => {
    dispatch(fetchAllCategories);
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      dispatch(fetchAllScoresbyCategory(category.id));
    });
  }, [categories]);

  return (
    <Container>
      <h1 className="display-2">Scoreboard</h1>
      <Row>
        <Col>
          {" "}
          <h2 style={{ fontSize: 22 }}>Flags of the world</h2>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {flagCatScores.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.player.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2 style={{ fontSize: 22 }}>Find the countries over the world</h2>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                {" "}
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {countryCatScores.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.player.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ fontSize: 22 }}>Find the countries of Europe</h2>
          <Table variant="dark" striped bordered hover size="xsm">
            <thead>
              <tr>
                {" "}
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {europeCatScores.map((score, i) => {
                return (
                  <tr key={i}>
                    <td>{score.player.name}</td>
                    <td>{score.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
