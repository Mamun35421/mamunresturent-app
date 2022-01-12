import React from 'react'
import Form from '../../layouts/Form'
import { Grid } from '@material-ui/core'
import Input from '../../controls/input'
import Select from '../../controls/select'


const pMethods = [
    {id:'none', title: 'Select'},
    {id:'Cash', title: 'Cash'},
    {id:'Card', title: 'Card'},
]



export default function orderForm() {
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled  
                    label="Order Number"
                    name = "Order Number"
                    />

                    <Select 
                    label="Customer"
                    name="CustomerId"
                    options={[
                        {id:0,title : 'selecter'},
                        {id:1,title : 'Customer 1'},
                        {id:2,title : 'Customer 2'},
                        {id:3,title : 'Customer 3'},
                        {id:4,title : 'Customer 4'}
                    ]}
               />
                </Grid>
                <Grid item xs={6}>
                <Select 
                    label="Payment Method"
                    name="PmETHOD"
                    options={pMethods}
            />
                <Input
                    disabled  
                    label="Grand Total"
                    name = "gTotal"
                    />
                </Grid>

            </Grid>
        </Form>
    )
}
