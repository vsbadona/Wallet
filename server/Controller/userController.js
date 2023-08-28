import User from "../Models/userSchema.js"
import bcrypt from "bcryptjs"

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    if (name && email && password) {
        const Mail = email.toLowerCase();
        // Check If given email or phone number already exists
        const checkUnique = await User.findOne({ email: Mail })
        if (checkUnique) {
            res.json({ alert: "Email Already Exists" })
        } else {
            // check that passsword contains more than 6 letters
            if (password.length < 6) {
                res.json({ alert: "Password Too Short" })
            } else {
                const pwdtoken = await bcrypt.hash(password, 12)
                // Create New User
                const Register = await new User({
                    name: name,
                    email: Mail,
                    password: pwdtoken,
                })
                if (Register) {
                    res.json({ success: "User Registered Successfully" })
                    Register.save()
                } else {
                    res.json({ error: "Something Went Wrong" })
                }
            }
        }
    } else {
        res.json({ alert: "All Fields Are Required" })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.query
    if (email && password) {
        const Mail = email.toLowerCase();
        const findUser = await User.findOne({ email: Mail })
        if (findUser) {
            const checkPassword = await bcrypt.compare(password, findUser.password)
            if (checkPassword) {
                res.json({ success: "Login Success", data: findUser })
            } else {
                res.json({ alert: "Password Is Incorrect" })
            }
        } else {
            res.json({ alert: "Email Is Not Registered" })
        }
    } else {
        res.json({ alert: "Email And Password Is Required" })
    }
}

export const updateWallet = async(req,res) => {
    const {_id} = req.query
    const numAmount = parseFloat(req.query.amount)
    if(!numAmount){
        res.json({alert:"Enter Amount to Update"})
    }else{
        const findUser = await User.findById(_id);
        if(findUser){
          const sum =   findUser.balance + numAmount;
          findUser.balance = sum;
          if(sum){
            const date = Date.now()
            const dd = new Date(date)
            const year = dd.getFullYear();
             const month = dd.getMonth() + 1; // Months are 0-indexed, so adding 1
             const day = dd.getDate();
             const newHistory = {
                date : `${day}-${month}-${year}`,
                amount : numAmount
             }
             findUser.history.push(newHistory)
         await   findUser.save();
            res.json({success : "Amount Updated ",data:findUser})
          }else{
            res.json({error:"Can't Update Balance"})
          }
        }else{
            res.json({alert:"Please Login Again!"})
        }
    }

}