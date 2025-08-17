import React from 'react'
import { Button, Card, Label, Textarea } from "flowbite-react";
import { IoMdCloudUpload } from 'react-icons/io';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Spinner } from 'flowbite-react';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import ValidationError from '../shared/ValidationError/ValidationError';

const schema =z.object({
    body:z.string().min(2,{message:"Post must not be empty"}),
    image:z.string().min(1,{message:"Image is required"})
})
export default function Add() {

    const uploadFile = useRef();
    let { register, handleSubmit ,reset ,formState:{isSubmitting ,errors}} = useForm({
        resolver:zodResolver(schema)
    })




    async function onSubmit(values) {
        try {
            let formData = new FormData();
            formData.append("body", values.body);
            formData.append("image", uploadFile.current.files[0]);
            let { data : {message} } = await axios.post(`${import.meta.env.VITE_BASE_URL}/posts`, formData, {
                headers: {
                    token: localStorage.getItem("token")
                }
            })
            // console.log(data);
            if(message === "success"){
                reset();
            }
            else if(message){
                 throw new Error(message);
                
            }

        }
        catch (error) {
            console.log(error);
        }
        // console.log(values.body ,uploadFile.current.files[0]);
    }
    return (
        <div>
            <Card >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment">Post Something...</Label>
                        </div>
                        <div className="flex items-center gap-6">
                            <Textarea id="comment" rows={2} {...register("body")} />
                            <div>
                                <IoMdCloudUpload onClick={() => uploadFile.current.click()} className='text-4xl' />
                                <input type="file" id='file' hidden {...register("image")} ref={uploadFile} />
                            </div>
                        </div>

                    </div>
                    <ValidationError error={errors.body}/>
                    <Button type="submit" disabled={isSubmitting}> {isSubmitting && <Spinner aria-label="Spinner    button example" size="sm" light /> } <span className="pl-3">Post</span></Button>
                    
                </form>
            </Card>
        </div>
    )
}
