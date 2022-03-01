import mongoose from 'mongoose' 

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        default: 'guest' 
    },
    email: { 
        type: String 
    },
    password: { 
        type: String 
    },
    image: { 
        type: String, 
        default: 'https://yt3.ggpht.com/yti/APfAmoGW1HkVqz9oHijKent3oiVroDf3vUpQZIHijiOADw=s88-c-k-c0x00ffffff-no-rj-mo' 
    },
    emailVerified: { 
        type: String, 
        default:null 
    },
}, { timestamps: true })


let Dataset = mongoose.models.users|| mongoose.model('users', userSchema);

export default Dataset;