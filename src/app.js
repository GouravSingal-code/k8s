require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        pod: process.env.HOSTNAME,
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`);
}); 