const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(configuration)

const translate = async (text, from, to) => {
    console.log(text, from, to);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `## Translate this code from ${from} to ${to}\n##${from}\n${text}\n##${to}\n`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    })

    return response.data.choices[0].text
} 

const detectLanguage = text => {
    // TODO 
}

module.exports = {
    translate,
    detectLanguage
}