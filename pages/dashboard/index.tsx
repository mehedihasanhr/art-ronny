import * as React from 'react';
import Button from "@/components/Button/Button";
import { BsGoogle } from "react-icons/bs";


export default function Login(){
    return(
        <div className="flex items-center justify-center h-screen">
            <div>
                <Button
                    type="button"
                    className="flex items-center justify-center space-x-3 bg-green-700 hover:bg-green-500 px-5 rounded-md text-green-50"
                >
                    <BsGoogle />
                    <span>Login With Google</span>
                </Button>
            </div>
        </div>
    )
}