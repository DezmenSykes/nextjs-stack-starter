export const addPost = async (formData) => {
    "use server"
    const title = formData.get("title");
    const description = formData.get("description");
    const slug = formData.get("slug");
    const userId = formData.get("userId");
    
    console.log(formData);
}