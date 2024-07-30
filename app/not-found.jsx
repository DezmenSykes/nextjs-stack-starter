import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>404 Not Found</h2>
            <p>Sorry, the requested page does not exist my guy.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
  }
  
  export default NotFound