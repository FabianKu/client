import React from "react";
import styled from "styled-components";
import { BaseContainer } from "../../helpers/layout";
import { getDomain } from "../../helpers/getDomain";
import Player from "../../views/Player";
import { Spinner } from "../../views/design/Spinner";
import { Button } from "../../views/design/Button";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



import Table1 from '../../components/table/table'

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
  width: 40%;
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

//here comes the data for the table
//the description here and in the field isKey in the table class must be the same
var data = [
    { name: 'Gob', value: '2'},
    { name: 'Buster', value: '5'},
    { name: 'George Michael', value: '4'}
];

class Overview extends React.Component {
    constructor() {
        super();
        this.state = {
            users: null,
            name:"hallo",
            username:"9"
        };



    }

    componentDidMount() {
    }

    render() {




             {
                return (
                    <BaseContainer>
                        <FormContainer>
                            <Form>
                    <div className="App">
                        <p className="Table-header"><Label>Information of User</Label></p>
                        <Table1 data={data}/>
                            </div>

                        </Form>
                    </FormContainer>
                    </BaseContainer>)

            }
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



