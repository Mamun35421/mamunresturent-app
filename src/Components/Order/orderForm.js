import React from 'react'
import Form from '../../layouts/Form'
import { Grid } from '@material-ui/core'
import Input from '../../controls/input'



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

                </Grid>
                <Grid item xs={6}>
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
