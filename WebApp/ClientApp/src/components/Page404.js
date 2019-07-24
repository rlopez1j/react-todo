import { React } from 'react';
import { CssBaseline, Typography } from '@material-ui/core'
import { Jumbotron } from 'react-bootstrap';
import 'typeface-roboto';

const Page404 = ()=>{
    return(<>
        <CssBaseline>
            <Jumbotron>
                <Typography variant="h1">
                    404 Page Not Found.
                </Typography>
            </Jumbotron>
        </CssBaseline>
    </>)
}

export default Page404;