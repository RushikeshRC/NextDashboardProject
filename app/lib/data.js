//fetch data using this file

import { Product, User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (q, page)=> {
    
    const regex = new RegExp(q,"i");    //to search every single letter we use regex and for case sensitive used "i"

    //create how many users i want to see
    const ITEM_PER_PAGE = 2;

    try {
        connectToDb();

        const count = await User.find({username:{$regex : regex}}).count();
        //just count the number of users and return the count

        const users = await User.find({username:{$regex : regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        //what skip does is, it skips certain amount of items
        //e.g if page=1, 1-1=0, 0*anything=0, so it's not going to skip any item on 1st page, it will show 1st 2 items

        return {count, users};
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!..");
    }
};

export const fetchProducts = async (q, page)=> {
    
    const regex = new RegExp(q,"i");    //to search every single letter we use regex and for case sensitive used "i"

    //create how many users i want to see
    const ITEM_PER_PAGE = 2;

    try {
        connectToDb();

        const count = await Product.find({title:{$regex : regex}}).count();
        //just count the number of users and return the count

        const products = await Product.find({title:{$regex : regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        //what skip does is, it skips certain amount of items
        //e.g if page=1, 1-1=0, 0*anything=0, so it's not going to skip any item on 1st page, it will show 1st 2 items

        return {count, products};
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products!..");
    }
};