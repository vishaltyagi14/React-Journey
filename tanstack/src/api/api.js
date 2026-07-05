export const fetchPosts = async () => {
    try {
        const data = await fetch("http://localhost:3000/posts?_sort=-id")
        const response = await data.json()
        return response

    } catch (error) {
        console.error("error fetching data: ", error)
    }
}

export const addPost = async (post) => {
    const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    return response.json();
};

export const fetchTags = async () => {
    try {
        const data= await fetch("http://localhost:3000/tags")
        return await data.json()
    } catch (error) {
        console.error("Unable to fetch Tags: ",error);
        
    }
}

// export {fetchPosts, fetchTags, addPost};