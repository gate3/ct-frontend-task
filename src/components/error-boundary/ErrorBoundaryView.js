import React from 'react';
import {Segment, Grid, GridColumn, GridRow, Header, Button, ButtonGroup, Icon} from "semantic-ui-react";
import {ReactComponent as ErrorImage} from '../../assets/img/error-browser.svg';
import {Link} from "react-router-dom";

const InlineStyle = () => (
    <style>
        {`
        .grid {
          position: relative;
          height: 100vh;
        }
        .ui-centered-raised-card {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        }
    `}
    </style>
);

const ErrorBoundaryView = () => (
    <>
        <InlineStyle />
        <Grid centered>
            <GridRow columns={3} textAlign='center'>
                <GridColumn>
                    <Segment raised={true} className={"ui-centered-raised-card"} textAlign={"center"}>
                        <div>
                            <ErrorImage width={60} />
                        </div>
                        <Header as="h3">
                            Oh Oh!
                        </Header>
                        We are sorry, but there seems to be a problem accessing the resource this.

                        <div>
                            <ButtonGroup>
                                <Link to={"/"}>
                                    <Button>
                                        <Icon name={"home"} />
                                        Return To Homepage
                                    </Button>
                                </Link>
                                <Button.Or />
                                <Button positive onClick={() => window.location.reload()}>
                                    Refresh Page &nbsp;
                                    <Icon name={"refresh"} />
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Segment>
                </GridColumn>
            </GridRow>
        </Grid>
    </>
);

export default ErrorBoundaryView
