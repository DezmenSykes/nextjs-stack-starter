import { sayHello } from "@/libs/actions";

const ServerActionsPage = () => {
    return (
        <div>
            <form action={sayHello} method="post">
                <button>Test Button</button>
            </form>
        </div>
    )
}

export default ServerActionsPage