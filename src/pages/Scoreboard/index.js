import React, { useEffect, useState } from "react";
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
  const { flagCatScores, countryCatScores, categories } = useSelector(
    selectScores
  );

  useEffect(() => {
    dispatch(fetchAllCategories);
  }, []);

  useEffect(() => {
    categories.forEach((category) => {
      console.log("fetching data for category:", category.id);
      dispatch(fetchAllScoresbyCategory(category.id));
    });
  }, [categories]);

  console.log("flagCategory:", flagCatScores);
  console.log("countryCatScores:", countryCatScores);

  return (
    <Container>
      <h1 className="display-2">Scoreboard</h1>
      <Row>
        <Col>
          {" "}
          <h3>Guess the flag!!</h3>
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
          <h3>Guess the Country!!</h3>
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
    </Container>
  );
}
