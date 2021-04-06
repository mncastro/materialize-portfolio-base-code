import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "",
        padding: "2rem",
        color: "white"
    },

    timeline: {
        position: "center",
        padding: "2rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&after": {
            content: "''",
            display: "table",
            clear: "both"
        }
        // [theme.breakpoint.up("md")]: {
        //     padding: "2rem",
        //     "&:before": {
        //         left: "calc(50%- 1px)",
        //     right: "auto"    
        //     }
        // }
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h2" align="center">
                    <b> Resume </b>
                </Typography>
                <>
                </>
                <Box component="div" className={classes.timeline}>
                    <Typography variant="h4" align="center">
                        Education
                    </Typography>
                    &nbsp;
                    <Box>
                    <Typography variant="h5" align="left">
                        <li><b>PhD in Latin American Studies (2014 - 2020)
                            </b></li>
                        <p>The University of Texas at Austin</p>
                            <p><b>Dissertation: </b> <i>A Journey Through the Discursive Construction and Cultural Silencing of Mexico’s Dirty War</i></p>
                        <li><b>MA in Mexican American Studies (2012 - 2014)
                            </b></li>
                        <p>The University of Texas at Austin</p>
                            <p><b>MA Thesis: </b> <i>Fictionalizing Juárez: Feminicide, Violence, and Myth-Making in the Borderlands</i></p>
                            <li><b>Licenciatura in Mexican Letters (2005 - 2010)
                            </b></li>
                        <p>Universidad Autónoma de Nuevo León</p>
                        </Typography>
                    </Box>

                </Box>
                <Box>
                    <Typography variant="h4" align="center">
                        Work Experience
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="left">
                    <li><b>Freelancer (2020 - Present)</b></li>
                    <p>Selg-Employed</p>
                    <p><i>Duties: </i> translation (non-legal) and transcription services for consulting companies and translation agencies.</p>
                    <li><b>Transcriptionist (2020)</b></li>
                    <p>Appen China</p>
                    <p><i>Duties: </i> audio transcription for software and hardware advancement (machine learning, datamining, smart devices).</p>
                    <li><b>Content Tutor (2019)</b></li>
                    <p>The University of Texas at Austin - Athletics Department</p>
                    <p><i>Duties: </i> student-athletes tutoring aimed at improving their English composition skills and learn-study strategies.</p>
                    <li><b>Business English Coach (2019)</b></li>
                    <p>Strategic Training for Human Advancement (STRATHA)</p>
                    <p><i>Duties: </i> private Business English lessons for administrative staff of a pharmaceutical company (Bristol Myers Squibb).</p>
                    <li><b>Teaching Assistant (2013, 2016 - 2017, 2019)</b></li>
                    <p>The University of Texas at Austin</p>
                    <p><i>Duties: </i> Assignment grading, supervision of students' final projects, review guides/sessions, and general assistance duties for main faculty in the departments of English and History.</p>
                        </Typography>
                </Box>
                &nbsp;
                <Box>
                    <Typography variant="h4" align="center">
                        Certifications and Workshops
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="left">
                    <li><b>Full-Stack Web Development Bootcamp (2020 - 2021)
                    </b></li>
                    <p>Tecnológico de Monterrey</p>
                    <li><b>The Data Scientist's Toolbox (2018)
                    </b></li>
                    <p>John Hopkins University</p>
                    <li><b>Help! I'm a Humanist! – Programming for Humanists with Python (2017)
                    </b></li>
                    <p>Humanities Intensive Learning and Teaching</p>
                    <li><b>Diploma Certificate in Translation and Conference Interpretation (2007 - 2010)
                    </b></li>
                    <p>Tecnológico de Monterrey</p>
                    <li><b>Decolonizing Knowledge and Power: Postcolonial Studies, Decolonial Horizons (2013)
                    </b></li>
                    <p>Center of Study and Investigation for Global Dialogues (Barcelona, Spain)</p>
                        </Typography>
                </Box>
                &nbsp;
                <Box>
                    <Typography variant="h4" align="center">
                        Skills
                    </Typography>
                    &nbsp;
                    <Typography variant="h5" align="left">
                    <li>Fully billingual (English and Spanish).</li>
                    <li>Full-Stack Web Development knowledge (HTML, CSS, JavaScript, Node CLI, MySQL).</li>
                    <li>Basic knowledge of Python and R.</li>
                    <li>Basic knowledge of Digital Humanities (DH) tools (Scalar, FromPage, webscraping).</li>
                    <li>English and Spanish proofreading and editing knowledge.</li>
                    <li>Knowledge of Audacity, InDesign, and Adobe Photoshop software.</li>
                        </Typography>
                </Box>
            </Box>   
            <Box/>
        </>

    )
}


export default Resume