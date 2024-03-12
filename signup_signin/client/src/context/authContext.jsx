import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeRequest } from "../axios";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [premiumUser, setPremiumUser] =useState(JSON.parse(localStorage.getItem("premiumuser")) || null);

    const login = async (input) => {
        const res = await axios.post("http://localhost:3000/api/signin", input, {
            withCredentials: true,
        });

        console.log(res.data);
        setCurrentUser(res.data);
    }

    const handlePremium = async () => {
        try {
            const res = await makeRequest.get("http://localhost:3000/api/premium");
            console.log(res);
            console.log(res.razorpay_payment_id)
            const options = {
                key: res.data.key_id,
                order_id: res.data.order.id,
                handler: async function (res) {
                    await makeRequest.post("http://localhost:3000/api/premium/update", {
                        order_id: options.order_id,
                        payment_id: res.razorpay_payment_id,
                    });
                    setPremiumUser(options.order_id);
                    localStorage.setItem("premiumuser", JSON.stringify(currentUser));
                    alert("You are a premium user");
                }
            };

            const rzpl = new Razorpay(options);
            rzpl.open();
            // e.preventDefault(); // Remove this line if not needed
            rzpl.on("payment.failed", function (res) {
                console.log(res);
                alert('Something went wrong');
            });
        } catch (error) {
            console.error("Error handling premium:", error);
        }
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
       
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, premiumUser, handlePremium }}>
            {children}
        </AuthContext.Provider>
    );
}
