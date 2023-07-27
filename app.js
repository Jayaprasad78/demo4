const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));


// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://jayaprasadb718:3RXGk6sFMGzbniIw@information.roodbhf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Define a Mongoose schema for the data
const nameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// Create a Mongoose model based on the schema
const NameModel = mongoose.model('Name-data', nameSchema);

// Route to serve the form (EJS template)
app.get('/', (req, res) => {
    res.render('index'); // Assuming your EJS template file is named 'contact-form.ejs'
});

// Route to handle form submission
app.post('/save-name', (req, res) => {
    // Get the name submitted through the form
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    // Create a new document in the collection
    const newName = new NameModel({ name ,email,subject,message });
    

    // Save the document to the database
    newName.save()
        .then(() => {
            res.send(`Thank you, ${name}, for submitting the form!`);
        })
        .catch((err) => {
            console.error('Error saving data to the database:', err);
            res.redirect('/error'); // Redirect to an error page if there's an error
        });
});

// Start the server
const port = 8001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
