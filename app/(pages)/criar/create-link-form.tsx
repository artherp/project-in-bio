"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import TextInput from "@/app/components/ui/text-input";
import Button from "@/app/components/ui/button";
import { sanitizeLink } from "@/app/lib/utils";
import { verifyLink } from "@/app/actions/verify-link";
import { createLink } from "@/app/actions/create-link";
import { useRouter } from "next/navigation";

export default function CreateLinkForm() {

    const router = useRouter();
    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    function handleLinkChance(e: ChangeEvent<HTMLInputElement>) {
        setLink(sanitizeLink(e.target.value));
        setError("");
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(link.length === 0) return setError("Escolha um link primeiro :)")
        
        //quando o usuario escolhe um link ja existente
        const isLinkTaken = await verifyLink(link);

        if (isLinkTaken) return setError("Esse link ja existe, escolha outro :)")
        
        //criar o perfil
        const isLinkCreated = await createLink(link);   
        if (!isLinkCreated) return setError("Erro ao criar o perfil, tente novamente mais tarde")
        
        router.push(`/${link}`);
        }

    return (
        <>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">projectinbio.com/</span>
                <TextInput value={link} onChange={handleLinkChance} />
                <Button className="w-[126px]">Criar</Button>
            </form>
            <div>
                <span className="text-accent-pink">{error}</span>
            </div>
        </>
    )
}