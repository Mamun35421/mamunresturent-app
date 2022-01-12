import React ,{useState}from 'react'
import Form from '../../layouts/Form'
import { ButtonGroup, Button as MuiButton,Grid, InputAdornment,makeStyles } from '@material-ui/core'
import {Input,Select,Button} from "../../controls"
import ReplayIcon from '@material-ui/icons/Replay';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';


const pMethods = [
    {id:'none', title: 'Select'},
    {id:'Cash', title: 'Cash'},
    {id:'Card', title: 'Card'},
]

const useStyles = makeStyles(theme => ({
    adornmentText: {
        '& .MuiTypography-root':{
            color:'#f3b33d',
            fontWeight:'bolder',
            fontSize:  '1.5em'
        }
    }
}))

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () =>({
    orderMasterId : 0,
    orderNumber : generateOrderNumber(),
    customerId  : 0,
    pMethod : 'none',
    gTotal : 0,
    deletedOrderItemId: '',
    orderDetails : []



})



export default function OrderForm() {

    const [values,setValues]  = useState(getFreshModelObject());
    const classes = useStyles()
    
    return (
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <Input
                    disabled  
                    label="Order Number"
                    name = "Order Number"
                    value = {values.orderNumber}
                    InputProps={{
                        startAdornment: <InputAdornment
                        className={classes.adornmentText}
                        position="start">#</InputAdornment>
                    }}
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
                    name="pMethod"
                    options={pMethods}
                    value = {values.pMethod}
            />
                <Input
                    disabled  
                    label="Grand Total"
                    name = "gTotal"
                    value = {values.gTotal}
                    InputProps={{
                        startAdornment: <InputAdornment
                        className={classes.adornmentText}
                        position="start">$</InputAdornment>
                    }}
                    />
                    <ButtonGroup>
                         <MuiButton 
                         size="large"
                         endIcon = {<RestaurantMenuIcon />}
                         type="Submit">Submit</MuiButton>

                         <MuiButton
                         size='small'
                         startIcon={<ReplayIcon />}
                         />
                    </ButtonGroup>
                </Grid>

            </Grid>
        </Form>
    )
}
