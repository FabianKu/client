import React from "react";
import styled from "styled-components";
import { Redirect, Route } from "react-router-dom";
import Game from "../../game/Game";

//all the classes that are needed or to which I want to direct must be imported here with path
import Overview from "../../overview/Overview"
import Login_to_edit from "../../login_to_edit/login_to_edit";
import Edit_page from "../../edit_page/Edit_page";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

class GameRouter extends React.Component {
  render() {
    /**
     * "this.props.base" is "/app" because as been passed as a prop in the parent of GameRouter, i.e., App.js
     */
    return (
      <Container>
        <Route
          exact
          path={`${this.props.base}/dashboard`}
          render={() => <Game />}
        />

        <Route
          exact
          path={`${this.props.base}`}
          render={() => <Redirect to={`${this.props.base}/dashboard`} />}
        />


          <Route
              path={`${this.props.base}/dashboard/overview/:userid`}
              render={props => <Overview {...props} />}
          />


          <Route
              path={`${this.props.base}/dashboard/login_to_edit/:userid`}
              render={props => <Login_to_edit {...props} />}
          />


          <Route
              path={`${this.props.base}/dashboard/edit_page/:userid`}
              render={props => <Edit_page {...props} />}
          />

      </Container>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default GameRouter;
