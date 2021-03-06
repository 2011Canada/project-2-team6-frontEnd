import React, { SyntheticEvent, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios';
import wood from '../pictures/wood.jpg'
import RegisterBorder from '../components/fancy-border/RegisterBorder';
import { toast } from 'react-toastify';

interface IRegister {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string

}


export const Register: React.FunctionComponent<IRegister> = (props) => {

    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    const [firstname, changeFirstname] = useState("")
    const [lastname, changeLastname] = useState("")
    const [email, changeEmail] = useState("")

    const [error, setError] = useState(false);



    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeUsername(e.target.value)
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changePassword(e.target.value)
    }
    const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeFirstname(e.target.value)
    }
    const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeLastname(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeEmail(e.target.value)
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const newUser = {
            username: username,
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        }

        console.log(newUser)
        setError(false);
        try {
            let res = axios.post(`http://localhost:8080/register`, newUser)
                .then(res => {
                    toast.success("Register Success!")
                    
                })
        } catch (e) {

            setError(true);
        }
    }


    return (
        <div style={{ backgroundImage: `url(${wood})`, backgroundSize: 'cover', height: '100vh', paddingTop: '1%' }}>
            <div style={{ marginLeft: '40%', marginTop: '10%' }}>
                <RegisterBorder>
                    <div style={{ marginTop: '5%' }}>
                        <h6 style={{ fontSize: '200%', color: 'grey' }}>Register</h6>
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                direction="column"
                                // justify="flex-start"
                                // alignItems="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <div>
                                        <TextField value={username} onChange={handleUsernameChange} id="username" label="Username" variant="outlined" autoComplete="off" /> &nbsp;
                                    </div>
                                    <div style={{ marginTop: '15px', marginRight: '10px' }}>
                                        <TextField value={password} onChange={handlePasswordChange} id="password" label="Password" variant="outlined" type="password" />

                                    </div>
                                </Grid>
                                <Grid item>
                                    <TextField value={firstname} onChange={handleFirstnameChange} id="firstname" label="Firstname" variant="outlined" />  &nbsp;
                                    <div style={{ marginTop: '15px', marginRight: '10px' }}>
                                        <TextField value={lastname} onChange={handleLastnameChange} id="lastname" label="Lastname" variant="outlined" />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div style={{ marginBottom: '10px', marginRight: '10px' }}>
                                        <TextField value={email} onChange={handleEmailChange} id="email" label="Email" variant="outlined" type="email" />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Button href="/" variant='contained' color='secondary' style={{ marginRight: '5em' }}>Back To Login!</Button>
                                    <Button onClick={handleSubmit} type="submit" variant="outlined">Register!</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </div>
                </RegisterBorder>
            </div>

        </div>


    )
}