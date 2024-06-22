import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Home Page</div>
            <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button>
        </>
    )
}

/*  
Using replace: true in the navigate function is useful when you want to navigate to a new route but do not want the user to be able 
to return to the previous route using the back button.
Examples:
1. Order Confirmation Page
2. User Logout
3. Form Submission Success Page
4. Account Deletion Confirmation
5. Password Reset Completion
*/