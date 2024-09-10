import { addPost } from "@/libs/actions";

const ServerActionsPage = () => {
    return (
        <div>
            <form action={addPost} method="post">
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="description" placeholder="Description"/>
                <input type="text" name="slug"  placeholder="Slug" />
                <input type="text" name="userId" placeholder="User ID" />
                <button>Create Post</button>
            </form>
        </div>
    )
}

export default ServerActionsPage