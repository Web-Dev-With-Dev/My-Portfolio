// // // const express = require('express')
// // // const mongoose = require('mongoose')
// // // const path = require('path')
// // // const port = 3019;

// // // const app = express();
// // // app.use(express.static(__dirname));
// // // app.use(express.urlencoded({extended:true}))

// // // mongoose.connect('mongodb://127.0.0.1:27017/persons')
// // // const db = mongoose.connection
// // // db.once('open',()=>{
// // //     console.log("Mongodb connection successfully")
// // // })

// // // const userSchema =  new mongoose.Schema({
// // //     first:String,
// // //     email:String,
// // //     subject:String,
// // //     text:String
// // // })

// // // const Users = mongoose.model("data",userSchema)

// // // app.get('/',(req,res)=>{
// // //     res.sendFile(path.join(__dirname,'index.html'))
// // // })



// // // app.post('/post', async (req,res)=>{
// // //     const User = new Users ({
// // //         first,
// // //         email,
// // //         subject,
// // //         message
// // //     })
// // //     await User.save()
// // //     console.log(User)
// // //     res.send("Form submittion successful")
// // // })


// // // app.listen(port,()=>{
// // //     console.log("server started !")
// // // })



// // // app.post('/post', async (req, res) => {
// // //     try {
// // //         const { First, Email, Subject, Text } = req.body; // Extract form data

// // //         if (!First || !Email || !Subject || !Text) {
// // //             return res.status(400).send("All fields are required!");
// // //         }

// // //         const user = new User({
// // //             First,
// // //             Email,
// // //             Subject,
// // //             Text
// // //         });

// // //         await user.save();
// // //         console.log("Saved to DB:", user);
// // //         res.send("Form submission successful");
// // //     } catch (error) {
// // //         console.error("Error saving data:", error);
// // //         res.status(500).send("Internal Server Error");
// // //     }
// // // });

// // const express = require('express')
// // const mongoose = require('mongoose')
// // const path = require('path')
// // const port = 3019;

// // const app = express();
// // app.use(express.static(__dirname));
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json()); // Middleware to parse JSON requests

// // mongoose.connect('mongodb://127.0.0.1:27017/persons', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // });

// // const db = mongoose.connection;
// // db.once('open', () => {
// //     console.log("Mongodb connection successfully");
// // });

// // const userSchema = new mongoose.Schema({
// //     first: String,
// //     email: String,
// //     subject: String,
// //     text: String  // Ensure this matches the field you send in the form
// // });

// // const Users = mongoose.model("data", userSchema);

// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'index.html'));
// // });

// // app.post('/post', async (req, res) => {
// //     const { first, email, subject, text } = req.body;  // Extract values properly

// //     if (!first || !email || !subject || !text) {
// //         return res.status(400).send("All fields are required.");
// //     }

// //     try {
// //         const user = new Users({ first, email, subject, text });
// //         await user.save();
// //         console.log(user);
// //         res.send("Form submission successful");
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).send("Error saving to database");
// //     }
// // });

// // app.listen(port, () => {
// //     console.log(`Server started on port ${port}!`);
// // });
// const express = require('express')
// const mongoose = require('mongoose')
// const path = require('path')
// const port = 3019;

// const app = express();
// app.use(express.static(__dirname));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); // Middleware to parse JSON requests

// // mongoose.connect('mongodb://127.0.0.1:27017/persons', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // });


// mongoose.connect('mongodb+srv://gondaliyadev007:WmPYQn0XnGP777ts@mymongodb.ahy8zji.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

// const db = mongoose.connection;
// db.once('open', () => {
//     console.log("Mongodb connection successfully");
// });

// const userSchema = new mongoose.Schema({
//     first: String,
//     email: String,
//     subject: String,
//     text: String  // Ensure this matches the field you send in the form
// });

// const Users = mongoose.model("data", userSchema);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/post', async (req, res) => {
//     const { first, email, subject, text } = req.body;  // Extract values properly

//     if (!first || !email || !subject || !text) {
//         return res.status(400).send("All fields are required.");
//     }

//     try {
//         const user = new Users({ first, email, subject, text });
//         await user.save();
//         console.log(user);
//         res.send("Form submission successful");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error saving to database");
//     }
// });

// app.listen(port, () => {
//     console.log(`Server started on port ${port}!`);
// });
// const express = require('express')
// const mongoose = require('mongoose')
// const path = require('path')
// const port = 3019;

// const app = express();
// app.use(express.static(__dirname));
// app.use(express.urlencoded({extended:true}))

// mongoose.connect('mongodb://127.0.0.1:27017/persons')
// const db = mongoose.connection
// db.once('open',()=>{
//     console.log("Mongodb connection successfully")
// })

// const userSchema =  new mongoose.Schema({
//     first:String,
//     email:String,
//     subject:String,
//     text:String
// })

// const Users = mongoose.model("data",userSchema)

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })



// app.post('/post', async (req,res)=>{
//     const User = new Users ({
//         first,
//         email,
//         subject,
//         message
//     })
//     await User.save()
//     console.log(User)
//     res.send("Form submittion successful")
// })


// app.listen(port,()=>{
//     console.log("server started !")
// })



// app.post('/post', async (req, res) => {
//     try {
//         const { First, Email, Subject, Text } = req.body; // Extract form data

//         if (!First || !Email || !Subject || !Text) {
//             return res.status(400).send("All fields are required!");
//         }

//         const user = new User({
//             First,
//             Email,
//             Subject,
//             Text
//         });

//         await user.save();
//         console.log("Saved to DB:", user);
//         res.send("Form submission successful");
//     } catch (error) {
//         console.error("Error saving data:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019;
const apiPostHandler = require('./api/post.js').default;

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware to parse JSON requests

// mongoose.connect('mongodb://127.0.0.1:27017/persons', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });


mongoose.connect('mongodb+srv://gondaliyadev007:WmPYQn0XnGP777ts@mymongodb.ahy8zji.mongodb.net/?retryWrites=true&w=majority&appName=mymongodb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.once('open', () => {
    console.log("Mongodb connection successfully");
});

const userSchema = new mongoose.Schema({
    first: String,
    email: String,
    subject: String,
    text: String  // Ensure this matches the field you send in the form
});

const Users = mongoose.model("data", userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/api/post', (req, res) => {
    req.method = 'POST'; // manually add method for compatibility
    apiPostHandler(req, res);
  });

// app.post('/post', async (req, res) => {
//     const { first, email, subject, text } = req.body;  // Extract values properly

//     if (!first || !email || !subject || !text) {
//         return res.status(400).send("All fields are required.");
//     }

//     try {
//         const user = new Users({ first, email, subject, text });
//         await user.save();
//         console.log(user);
//         res.send("Form submission successful");
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error saving to database");
//     }
// });

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
