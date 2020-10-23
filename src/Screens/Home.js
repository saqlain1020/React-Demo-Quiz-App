import { Container, Grid } from '@material-ui/core'
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={2} style={{ marginTop: 10 }}>
                    <Grid item xs={12} md={4} style={{ backgroundColor: "red" }}>
                        <h1>Home</h1>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: "yellow" }}>
                        <h1>Home2</h1>
                    </Grid>
                    <Grid item xs={12} md={4} style={{ backgroundColor: "blue" }}>
                        <h1>Home3</h1>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
