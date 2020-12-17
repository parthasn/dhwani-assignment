const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const users = require('./users')
const states = require('./states')
const districts = require('./districts')
const childProfiles = require('./childProfiles')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const User = require('./models/User')
const State = require('./models/State')
const District = require('./models/District')
const ChildProfile = require('./models/ChildProfile')

const authRoute = require('./routes/authRoutes');
const stateRoute = require('./routes/stateRoutes');
const districtRoute = require('./routes/districtRoutes');
const childProfileRoute = require('./routes/childProfileRoutes');

mongoose.connect('mongodb://localhost/dhwani-database', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if(err){
        console.log("Connection to database failed")
    }
    
    if(User.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            User.insertMany(users).then(()=>{ 
            console.log("User Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    if(State.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            State.insertMany(states).then(()=>{ 
            console.log("State Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    if(District.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            District.insertMany(districts).then(()=>{ 
            console.log("District Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    if(ChildProfile.collection.countDocuments((err, count) => {
        if (!err && count === 0) {
            // It's empty
            ChildProfile.insertMany(childProfiles).then(()=>{ 
            console.log("Child profile Data inserted")  // Success 
        }).catch((error)=>{ 
            console.log(error)      // Failure 
        }); 
        }
    }));
    
});

app.use('/api/user', authRoute);
app.use('/api', stateRoute);
app.use('/api', districtRoute);
app.use('/api', childProfileRoute);
app.listen(8000, () => {
    console.log("The server is up and running on port 8000")
});

