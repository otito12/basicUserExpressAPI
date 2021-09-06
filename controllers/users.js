import {v4 as uuidv4} from 'uuid';
let users = []

export const getUsers = (req,res)=>{
    console.log(users);
    res.send(users);
};

export const createUser = (req,res)=>{
    const newUser = req.body;
    users.push({id: uuidv4(), ...newUser});
    res.send(`reached post and user ${newUser.fisrtName} added to DB`);
};

export const getUserbyID = (req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const foundUser  = users.find((user) => user.id == id);
    res.send(foundUser);
};

export const deleteUserbyID = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`removed user with id ${id}`);
};

export const updateUserbyID = (req,res)=>{
    const {id} = req.params;
    const {fisrtName, lastName, age} = req.body; 
    const user  = users.find((user) => user.id == id);

    if(fisrtName) user.fisrtName = fisrtName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    res.send(`user with id ${id} updated`);
};
