import { Box, Paper, Grid, Divider, Input, TextField, Button, AppBar, Stack, Tabs, Tab } from "@mui/material"
import { useState } from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeEditor from '@uiw/react-textarea-code-editor';
import API from "./api"

const Main = () => {

    const [languageFrom, setLanguageFrom] = useState('Python')
    const [languageTo, setLanguageTo] = useState('Javascript')
    const [input, setInput] = useState('')
    const [translation, setTranslation] = useState('translation')

    const inputChanged = text => {
        setInput(text)
    }

    const languageFromChanged = language => {
        setLanguageFrom(language)
    }

    const translate = async text => {
        const data = await API.translate(text, languageFrom, languageTo)
        setTranslation(data)
    }


    return (
        <Grid container direction='column'>
            <Grid item >
                <Box height='8vh' sx={{backgroundColor: '#eeeee4'}}>
                </Box>
            </Grid>
            <Grid paddingRight={10} paddingLeft={10}>
                <Paper >
                    <Grid container direction='column'>
                        <Grid item xs={1}>
                        <Tabs value={languageFrom} onChange={(e, lang) => languageFromChanged(lang)}>
                            <Tab label='JAVA' value='Java'/>
                            <Tab label='PYTHON' value='Python'/>
                            <Tab  label='JAVASCRIPT' value='Javascript'/>
                        </Tabs>           
                        </Grid>
                        <Grid item xs={11}>
                            <Grid container direction='row'>
                                <Grid item xs={6}>
            
                                    <CodeEditor
                                        value={input}
                                        onChange={e => inputChanged(e.target.value)}
                                        padding={10}
                                        language={languageFrom}
                                        rows={6}
                                        style={{
                                            borderRadius: '8px',
                                            overflowY: 'auto',
                                            scrollBehavior: 'smooth',
                                            height: '270px', maxHeight: '270px',
                                            fontSize: 16,
                                            borderStyle: 'initial',
                                            borderColor: 'divider',
                                            borderWidth: '1px',
                                            backgroundColor: "#f5f5f5",
                                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                        }}
                                    ></CodeEditor>
                                    <Stack direction='row' alignItems='center'>
                                        <Button 
                                            variant='contained' 
                                            onClick={e => translate(input)}
                                        >TRANSLATE</Button>
                                        <Button 
                                            variant='contained' 
                                            onClick={e => translate(input)}
                                        >two</Button>
                                    </Stack>
                                   
                                </Grid>
                            
                                <Grid item xs={6} sx={{backgroundColor:'white'}}>
                                        <SyntaxHighlighter language={languageTo} style={atomOneDarkReasonable}
                                        wrapLines showLineNumbers 
                                        customStyle={{
                                            height: '100%', maxHeight: '254px', 
                                            borderRadius: '8px'}}
                                        >
                                            {translation}
                                        </SyntaxHighlighter>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            
        </Grid>     
    )
}

export default Main