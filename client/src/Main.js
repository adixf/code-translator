import { Box, Paper, Grid, Stack, Tabs, Tab, IconButton } from "@mui/material"
import { useState } from "react"
import {DoubleArrowRounded} from '@mui/icons-material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeEditor from '@uiw/react-textarea-code-editor';
import LoadingButton from '@mui/lab/LoadingButton';
import API from "./api"

const Main = () => {

    const [languageFrom, setLanguageFrom] = useState('Python')
    const [languageTo, setLanguageTo] = useState('Java')
    const [input, setInput] = useState('')
    const [translation, setTranslation] = useState('translation')
    const [loading, setLoading] = useState(false)

    const inputChanged = text => {
        setInput(text)
    }

    const translate = async () => {
        setLoading(true)
        const {translation} = await API.translate(input, languageFrom, languageTo)
        setTranslation(translation)
        setLoading(false)
    }

    return (
        <Stack direction='column'>
            <Box 
                height='80px'
                sx={{
                    backgroundColor: '#eeeee4', 
                    borderBottom: '1px solid lightgrey'                   
                }}>            
            </Box>

            <Paper 
                elevation={3}
                sx={{borderRadius: '15px', marginLeft: 10, marginRight: 10, marginTop: -5, overflow: 'hidden'}}
            >
                <Grid container direction='row'>
                    <Grid item xs={6}>
                        <Stack direction='column' sx={{ height: '300px', maxHeight: '300px'}}>
                            <Tabs 
                                value={languageFrom} onChange={(e, lang) => setLanguageFrom(lang)}
                                sx={{borderBottom: '1px solid lightgrey'}}
                            >
                                    <Tab label='JAVA' value='Java' sx={{ fontWeight: 'bold'}}/>
                                    <Tab label='PYTHON' value='Python' sx={{ fontWeight: 'bold'}}/>
                                    <Tab label='JAVASCRIPT' value='Javascript' sx={{ fontWeight: 'bold'}}/>
                                    <Tab label="NATURAL LANGUAGE" value='Natural Language'  sx={{ fontWeight: 'bold'}}/>
                            </Tabs>  
                            
                            <CodeEditor
                                value={input}
                                onChange={e => inputChanged(e.target.value)}
                                padding={15}           
                                language={languageFrom}
                                style={{                               
                                    overflowY: 'auto',
                                    height: '100%',
                                    fontSize: 16,
                                    borderRight: '1px solid lightgrey',                                  
                                    backgroundColor: "#f5f5f5",
                                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                }}
                            ></CodeEditor>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack direction='column'  sx={{ height: '300px', maxHeight: '300px'}}>
                            <Tabs value={languageTo} onChange={(e, lang) => setLanguageTo(lang)}
                                sx={{borderBottom: '1px solid lightgrey'}}
                            >
                                <Tab label='JAVA' value='Java' sx={{ fontWeight: 'bold'}}/>
                                <Tab label='PYTHON' value='Python' sx={{ fontWeight: 'bold'}}/>
                                <Tab  label='JAVASCRIPT' value='Javascript' sx={{ fontWeight: 'bold'}}/>
                                
                            </Tabs>  
                            <SyntaxHighlighter language={languageTo} style={atomOneLight}
                                wrapLongLines showLineNumbers 
                                customStyle={{
                                    height: '300px',
                                    marginTop: '0',
                                    marginBottom: '0'                                
                                }}
                                >
                                    {translation}
                            </SyntaxHighlighter>
                        </Stack>
                    </Grid>

            </Grid>
            </Paper>
            <LoadingButton 
                loading={loading}
                color="primary" 
                variant='outlined'
                sx={{marginLeft: 83, marginRight: 83, marginTop: 1}}
                onClick={translate}
                
            >
                <DoubleArrowRounded/>
            </LoadingButton>
            
        </Stack>
    )
}

export default Main