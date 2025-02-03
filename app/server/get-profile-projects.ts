import { db } from "../lib/firebase";

export async function getProfileProjects(profileId: string) {
    try {
        // Busca todos os projetos da coleção 'projects' para o profileId específico
        const projectsSnapshot = await db
            .collection("projects")
            .doc(profileId)
            .collection("projects")
            .orderBy("createdAt", "desc")
            .get();

        // Converte os documentos em um array de projetos
        const projects = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return projects;
    } catch (error) {
        console.error("Erro ao buscar projetos:", error);
        return [];
    }
} 