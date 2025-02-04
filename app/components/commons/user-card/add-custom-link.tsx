"use client";

import { Plus } from "lucide-react";
import Modal from "../../ui/modal";
import { startTransition, useState } from "react";
import TextInput from "../../ui/text-input";
import Button from "../../ui/button";
import { useRouter } from "next/navigation";
import addCustomLinks from "@/app/actions/add-custom-links";    
import { useParams } from "next/navigation";

export default function AddCustomLink() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSavingCustomLinks, setIsSavingCustomLinks] = useState(false);
    const router = useRouter();
    const { profileId } = useParams();

    const [link1, setLink1] = useState({
        title: "",
        url: "",
    })

    const [link2, setLink2] = useState({
        title: "",
        url: "",
    })

    const [link3, setLink3] = useState({
        title: "",
        url: "",
    })  
    
    if(!profileId) {
        return;
    }


    const handleSaveCustomLinks = async () => {
        setIsSavingCustomLinks(true);
        await addCustomLinks({
            profileId: profileId as string,
            link1,
            link2,
            link3,
        })

        startTransition(() => {
            setIsModalOpen(false);
            setIsSavingCustomLinks(false);
            router.refresh();
        })
    }

    return (
        <>
        <button onClickCapture={() => setIsModalOpen(true)} className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]" onClick={() => setIsModalOpen(true)}>
            <Plus />
        </button>

        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
            <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10 w-[514px]">
                <p className="text-white text-xl font-bold">Adicionar links personalizados</p>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col w-full">
                            <p>Título do link</p>
                            <TextInput placeholder="Exemplo: Meu site" value={link1.title} onChange={(e) => setLink1({ ...link1, title: e.target.value })} />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="font-bold">Link</p>
                            <TextInput placeholder="Exemplo: https://www.google.com" value={link1.url} onChange={(e) => setLink1({ ...link1, url: e.target.value })} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col w-full">
                            <p>Título do link</p>
                            <TextInput placeholder="Exemplo: Meu site" value={link2.title} onChange={(e) => setLink2({ ...link2, title: e.target.value })} />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="font-bold">Link</p>
                            <TextInput placeholder="Exemplo: https://www.google.com" value={link2.url} onChange={(e) => setLink2({ ...link2, url: e.target.value })} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col w-full">
                            <p>Título do link</p>
                            <TextInput placeholder="Exemplo: Meu site" value={link3.title} onChange={(e) => setLink3({ ...link3, title: e.target.value })} />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="font-bold">Link</p>
                            <TextInput placeholder="Exemplo: https://www.google.com" value={link3.url} onChange={(e) => setLink3({ ...link3, url: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 justify-end">
                    <button onClick={() => setIsModalOpen(false)} className="font-bold text-white">Voltar</button>
                    <Button onClick={handleSaveCustomLinks} disabled={isSavingCustomLinks}>Salvar</Button>
                </div>
            </div>
        </Modal>
        </>
            )
}