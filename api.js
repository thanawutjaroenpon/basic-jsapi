const express = require('express')
const app = express();
const PORT = 4000
app.use(express.json());
const image = [
    {
        image1:'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
        image2:'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
        image3:'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]
app.get('/ima',(req, res) => {
    res.status(200).json(image);
})

app.listen(PORT, () => console.log
('server run')
)