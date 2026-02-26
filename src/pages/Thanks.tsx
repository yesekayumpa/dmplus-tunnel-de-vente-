import Footer from "@/components/Footer.tsx";


const Thanks = () =>  {

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div
                className="absolute bottom-auto inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(231,0,10,0.1),transparent_50%)]"></div>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(231,0,10,0.1),transparent_50%)]"></div>
            <div className="flex flex-col items-center py-36 px-10 text-white gap-4">
                <h1 className="text-4xl font-bold">✅ Merci pour ta confiance !</h1>
                <h2>Ta commande a bien été enregistrée.</h2>
                <p>📩 Un email vient de t'être envoyé avec le lien pour télécharger ta formation (pense à vérifier tes
                    spams ou promotions si tu ne le vois pas).</p>
                <p>🎓 Tu vas maintenant pouvoir te former au design graphique à ton rythme, et profiter des bonus
                    exclusifs
                    en marketing digital et en montage vidéo.</p>
                <p>Si tu as la moindre question ou besoin d'aide :</p>
                <p>📱 Contacte-nous directement via WhatsApp au <strong> ‪+221 76 422 37 61‬ </strong></p>

                Encore merci, et bon apprentissage !
            </div>

            <Footer/>

        </div>
    )
}

export default Thanks;