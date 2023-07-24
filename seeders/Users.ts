import { v4 as uuidv4} from "uuid";

export const users =()=>[
    {
        id: uuidv4(),
        name: "oussama djelloul " , 
        email: "oussamadjelloul@gmail.com",
        password: "123456890"
    },
    {
        id: uuidv4(),
        name: "mounir djelloul " , 
        email: "mounirdjelloul@gmail.com",
        password: "123456890"
    }
]