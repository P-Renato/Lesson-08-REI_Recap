
export async function handlePrompt(prompt){
    console.log('handle prompt has started');
    try {
        const res = await fetch("http://localhost:11434/api/generate", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({model: "llama3.2", prompt: "Answer with a short message. " + prompt,}),
        
        });
        if(!res){
            throw new Error('Error with LLM')
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder();

        const data = [];
        while(true){
             const {done, value} = await reader.read()
             if(done){
                break
             }
             const lines = decoder.decode(value, {stream: true}).split('\n');
             console.log(lines);
             for (const line of lines) {
                if(line.trim()){
                    const parsedLine = JSON.parse(line);
                    console.log(parsedLine.response)
                    data.push(parsedLine.response)
                }
             }
             console.log(data.join(""))
        }
        if(done) {

        }
        
    }
    catch(error) {
        console.log(error.message)
    }
    
}
