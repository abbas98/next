import { MongoClient } from "mongodb"
import { hash } from "bcryptjs";


export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { email, phone_number, password } = req.body

        if (!email && !phone_number) {
            res.status(422).json({ message: 'Enter email or phone number to continue' })
            return;
        }
        if (email && !email.includes('@')) {
            res.status(422).json({ message: 'Email format is incorrect' })
            return;
        }
        if (!password || password.length < 8) {
            res.status(422).json({ message: 'Check password' })
            return;
        }
        const client = await MongoClient.connect('mongodb+srv://amirabbas:gEliUZvlfxDQSJn0@cluster0.h1rgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        const db = client.db()

        //// find by email
        const checkEmailExisting = await db
            .collection('Users')
            .findOne({ email: email.toLowerCase() });

        //// find by phone number
        const checkPhoneNumberExisting = await db
            .collection('Users')
            .findOne({ phone_number: phone_number });

        if (checkPhoneNumberExisting) {
            res.status(422).json({ message: 'User with this phone number exits' })
            client.close()
            return;
        }
        if (checkEmailExisting) {
            res.status(422).json({ message: 'User with this email address exits' })
            client.close()
            return;
        }

        const status = await db.collection('Users').insertOne(
            {
                email: email ? email.toLowerCase() : 'empty',
                phone_number: phone_number ? phone_number : 'empty',
                password: await hash(password, 12)
            })

            res.status(201).json({message: 'user created' , ...status})
            client.close()
        
    }else{
        res.status(500).json({message: 'Route not valid'})
    }


}