"use client";

import Form from "@components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useState } from "react"




const AddResource = () => {
    const router = useRouter();
    const { data: session } = useSession();


    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        resource: "",
        link: "",
        tag: ""
    })

    const createPost = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/create/new',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        resource: post.resource,
                        userId: session?.user.id,
                        link: post.link,
                        tag: post.tag
                    })
                })

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
    return (
        <Form
            type="Post"
            post={post}
            setPost={setPost}
            submitting={submitting}
            addResource={createPost}
        />
    )
}

export default AddResource