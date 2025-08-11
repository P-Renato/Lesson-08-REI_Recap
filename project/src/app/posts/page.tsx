"use client";

import { getPosts } from "../lib/data";
import { Post } from "../lib/definitions";
import { inter, roboto, lora } from "../lib/fonts";

async function PostsPage() {
    const posts: Post[] | [] = await getPosts();


    
    return (
        <div>
            <h1 className={`${inter.className} p-6 m-4 text-center`}>Posts:</h1>
            {posts.map((post, i) =>(
                <div key={i} className="w-2xl h-xl bg-gray-200 p-3 m-4">
                    
                    <h4 className={`${roboto.className}`}>{post.title}</h4>
                    <p className={`${lora.className}`}>{post.body}</p>
                </div>
                
            ))}
            
        </div>
    );
}

export default PostsPage;