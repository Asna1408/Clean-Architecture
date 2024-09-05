
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from '../../interfaceAdapters/routes/UserRoutes'
import connectDB from '../database/Server';



class ExpressServer{
    constructor(){
        dotenv.config();

        const app = express();
        app.use(bodyParser.json());
        
        app.use("/api/user", userRoutes);
        
        const PORT = process.env.PORT || 3000;
        
        connectDB().then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        });
        
    }
}


export default ExpressServer;
