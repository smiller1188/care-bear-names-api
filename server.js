const express = require('express')
const app = express()
const PORT = 8000

const careBears = {
    'tenderheart bear': {
        'color': 'brown',
        'symbol': 'heart',
        'description': "Tenderheart Bear's job is to help people share their good feelings for each other. He's very affectionate and is not afraid to display his affection openly. By helping people show they care, Tenderheart Bear helps spread love and makes it grow."
    },
    'good luck bear': {
        'color': 'green',
        'symbol': 'shamrock',
        'description': "Good Luck Bear shares his good luck with everyone. He's loaded with luck, and good fortune follows him wherever he goes. Good Luck Bear enjoys success in almost everything he does, and he enjoys the privilege of helping others be successful."
    },
    'wish bear': {
        'color': 'turquoise',
        'symbol': 'shooting star',
        'description': "Wish Bear works to make people's wishes come true. She's a slow moving, carefree kind of Bear who believes that there's not a worry in the world that a wish won't wipe out. Wish Bear is a dreamer, and her wishful thinking makes others' dreams come true."
    },
    'cheer bear': {
        'color': 'pink',
        'symbol': 'rainbow',
        'description': "Cheer Bear is generally the first Care Bear to appear when someone is not feeling well or whenever things go wrong for any reason. Always the optimist, Cheer Bear approaches each day with a smile and a good word"
    },
    'bedtime bear': {
        'color': 'blue',
        'symbol': 'moon with a hanging star',
        'description': "Bedtime Bear's job is to make sure everyone gets a good night's sleep. He's strong, brave, and alert, making him the perfect Bear to stand guard over anyone's bedroom. When Bedtime Bear is on duty, there's no reason to be frightened by anything."
    },
    'love-a-lot bear': {
        'color': 'pink',
        'symbol': 'two hearts',
        'description': "There's a lot of romance in Love-a-Lot Bear's job. She brings lovers together. She's usually spunky and lighthearted, the embodiment of the spirit of first love. Yet she also has a reflective, sentimental side that allows her to help lovers smooth over little difficulties and misunderstandings."
    },
    'grumpy bear': {
        'color': 'blue',
        'symbol': 'rain cloud',
        'description': "Grumpy Bear is unlike all the other Care Bears; he frowns a lot. He reminds us that no matter how well things may be going in our lives, there inevitably will be times when we will find ourselves in a bad mood and that that's all right—as long as it doesn't last too long."
    },
    'funshine bear': {
        'color': 'yellow',
        'symbol': 'sunshine',
        'description': "Funshine Bear shares her enthusiasm for life and all its possibilities with everyone. A Bear of boundless energy, she puts all her efforts into making sure that people have a good time—no matter what they are doing."
    }, 
    'unknown': {
        'color': 'unknown',
        'symbol': 'unknown',
        'description': 'unknown'
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const careBearName = req.params.name.toLowerCase()
    if(careBears[careBearName]){
        res.json(careBears[careBearName])
    } else {
        res.json(careBears['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})
