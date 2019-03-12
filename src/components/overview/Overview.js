import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";

import { withRouter } from "react-router-dom";



import User from "../shared/models/User";


import Table1 from '../../components/table/table'
import {Button} from "../../views/design/Button";

const FormContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  justify-content: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150%;
  height: 300px;
  font-size: 16px;
  font-weight: 300;
  padding-left: 37px;
  padding-right: 37px;
  border-radius: 5px;
  background: linear-gradient(rgb(27, 124, 186), rgb(2, 46, 101));
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

const Container = styled(BaseContainer)`
  color: white;
  text-align: center;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 10px;
  text-transform: uppercase;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;




const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    p: {
        color: 'white',
    },
});




const rows = [
    ('name', 9),
    ('username', 8),
];



class Overview extends React.Component {
    helpvar;

    constructor() {
        super();
        this.state = {
            user: null,
            name: 'hallo',
            data1: []
        }
        this.set_user=this.set_user.bind(this)
    }


    go_to_login_for_specific_user(id){
        this.props.history.push("/game/dashboard/login_to_edit/"+id)
    }

    go_back(){
        this.props.history.push("/game/dashboard");
    }

    set_user(returned_user) {



        this.setState({user : returned_user})
        console.log("wrote the returned user into" + this.state.user)

        //here comes the data for the table
        //the description here and in the field isKey in the table class must be the same
        this.setState({data1 : [
            {name : 'Username', value: this.state.user.username}
        ,{name: 'Creation date', value: this.state.user.creation_date }
        ,{name: 'Online status', value: this.state.user.status}
        ,{name: 'Date of birth', value: this.state.user.date_birth}]})
        console.log("all data was saved in data1" + this.state.user.username + this.state.user.date_birth)
    }


    componentDidMount() {
        let id = this.props.location.pathname.split("/").pop();

        fetch(`${getDomain()}/user_for_overview?id=${id}`,
            {
                method: "GET",
            }
        )
            .then(response => response.json())
            .then(returned_user => {
                console.log("got the user from back end")
                    this.set_user(returned_user)

                }
            )
            .catch(err => {
                console.log(err);
                alert("Something went wrong fetching the users: " + err);
            });
    }



    render()

             {
                return (
                    <BaseContainer>
                        <FormContainer>
                            <Form>
                    <div className="App">
                        <p className="Table-header"><Label>Information of User</Label></p>
                        <Table1 data={this.state.data1}/>


                            </div>
                                <div>
                                <ButtonContainer>

                        <Button
                            width="40%"
                            onClick={() => {
                                this.go_to_login_for_specific_user(this.state.user.id);
                            }}
                        >
                            Edit
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Button
                                        width="40%"
                                        onClick={() => {
                                            this.go_back();
                                        }}
                                    >
                                        Back
                                    </Button>


                                </ButtonContainer>
                            </div>

                        </Form>
                    </FormContainer>
                    </BaseContainer>)


            }





















        /*return(

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow key={"name"}>
                                <TableCell align="right">{this.state.name}</TableCell>
                            </TableRow>
                            <TableRow key={"number"}>
                                <TableCell align="right">{this.state.username}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
        );
    }


*/


}


export default withRouter(Overview);



