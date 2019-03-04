import React, { Component } from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table'
import styled from "styled-components";

const Label = styled.label`
  color: white;
  margin-bottom: 5px;
  text-transform: uppercase;
`;




class table1 extends Component {
    render() {
        return (
            <div><Label>
                <BootstrapTable data={this.props.data}>
                    <TableHeaderColumn isKey dataField='name' width='10%'>
                        Description
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='value' width='10%' dataAlign = 'right'>
                        Value
                    </TableHeaderColumn>
                </BootstrapTable>
            </Label>
            </div>
        );
    }
}

export default table1;