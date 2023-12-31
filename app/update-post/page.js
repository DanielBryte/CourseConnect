"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { useSession } from "next-auth/react";

const UpdatePost = () => {
    const router = useRouter();
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const postId = searchParams.get("id");
    const [post, setPost] = useState({ resource: "", tag: "", });
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getPostDetails = async () => {
            const response = await fetch(`/api/create/${postId}`);
            const data = await response.json();

            setPost({
                resource: data.resource,
                tag: data.tag,
            });
        };
        if (postId) getPostDetails();
    }, [postId]);


    // Redirect to home page if no session

    useEffect(() => {
        if (!session) {
            router.push("/");
        }
    }, [session, router]);


    const updatePost = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!postId) return alert("PostId not found");

        try {
            const response = await fetch(`/api/create/${postId}`,
                {
                    method: 'PATCH',
                    body: JSON.stringify({
                        resource: post.resource,
                        tag: post.tag,
                    }),
                });

            if (response.ok) {
                router.push('/profile');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className="app">
            <Form
                type='Edit'
                post={post}
                setPost={setPost}
                submitting={submitting}
                addResource={updatePost}
            />
        </section>
    );
};

export default UpdatePost;