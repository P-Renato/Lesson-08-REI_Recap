export const getPosts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const posts = res.json();
    return posts;
}