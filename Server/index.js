// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.CONNECT ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const countSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Count = mongoose.model('Count', countSchema);


// API routes
app.get('/api/count', async (req, res) => {
    try {
    const count = await Count.findOne();
    
    res.json(count);
} catch (error) {
    res.status(500).json({ error: 'Server error' });
}
});

app.put('/api/increment', async (req, res) => {
    try {
    const count = await Count.findOne();
    if (!count) {
        count = new Count({ count: 1 });
    } else {
        count.count += 1;
    }
    // count.count += 1;
    await count.save();
    res.json(count);
} catch (error) {
    res.status(500).json({ error: 'Server error' });
}
});
// Angular dist output folder
// F:\Codestack\project\MEAN-stack_project\client\dist\client\index.html
app.use(express.static(path.join('../','client/','dist/','client/')));

app.get('/*', function (req, res) {
  res.sendFile(path.join('../','client/','dist/','client/', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
