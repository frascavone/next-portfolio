import { ReactNode } from "react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Post {
    id: number;
    imgPath: string;
    title: string;
    slug: string;
    author: string;
    avatarImgPath: string;
    updatedAt: Date;
    body: ReactNode;
    tags: string[];
}
interface BlogPageProps {
    posts: Post[];
}

const posts = [
    {
        id: 0,
        imgPath: "/imgs/impostore.png",
        title: "L'ostacolo silenzioso della programmazione: La Sindrome dell'Impostore",
        slug: "l-ostacolo-silenzioso-della-programmazione-la-sindrome-dell-impostore",
        author: "Francesco Scavone",
        avatarImgPath: "/imgs/propic.jpg",
        updatedAt: new Date(2024, 8, 29),
        body: (
            <div>
                <p>
                    {`Se sei uno sviluppatore, c’è una buona probabilità che tu
                    abbia mai sentito quel fastidioso “senso di colpa” quando ti
                    guardi intorno e pensi: “Ma io non merito di essere qui”.
                    Ecco, quella sensazione ha un nome: sindrome dell'impostore.
                    Ma non preoccuparti, non sei solo! Scopriamo insieme di cosa
                    si tratta e come affrontarla.`}
                </p>
                <br />
                <h3 className="mb-2 font-bold text-lg mt-4">
                    {`Cos'è la Sindrome dell'Impostore?`}
                </h3>
                <p>
                    {`Immagina di essere a una conferenza e di sentire tutti
                    parlare fluentemente delle ultime tecnologie, mentre tu ti
                    chiedi se davvero hai il diritto di essere lì. La sindrome
                    dell'impostore è quella vocina interiore che ti fa dubitare
                    delle tue capacità, facendoti sentire come se fossi solo un
                    “impostore” che ha ingannato tutti. Anche se hai avuto
                    successi e progetti completati, quella vocina continua a
                    tormentarti.`}
                </p>
                <br />
                <h3 className="mb-2 font-bold text-lg mt-4">
                    I Sintomi Comuni
                </h3>
                <ul className="list-disc list-inside pl-3">
                    <li>
                        {`Auto-svalutazione: Ti guardi indietro e pensi che, in
                        fondo, non hai fatto nulla di così straordinario.`}
                    </li>
                    <li>
                        {`Paura del fallimento: Ogni volta che ti viene assegnato
                        un progetto, ti senti come se stessi per cadere in un
                        abisso.`}
                    </li>
                    <li>
                        {`Confronto con gli altri: Guardi i tuoi colleghi e pensi
                        che siano tutti dei geni, mentre tu sei solo... beh, “un
                        impiegato”.`}
                    </li>
                </ul>
                <br />
                <h3 className="mb-2 font-bold text-lg mt-4">
                    {`Perché è Comune tra Sviluppatori`}
                </h3>
                <p>
                    {`Il mondo della tecnologia è una giungla! Nuove lingue,
                    framework, tool... Ogni giorno sembra che ci sia qualcosa di
                    nuovo da imparare. In questo clima, è facile sentirsi
                    sopraffatti e pensare: “Ma io non sono all'altezza!” La
                    cultura del “devi sempre sapere tutto” non aiuta certo, anzi
                    la intensifica.`}
                </p>
                <br />
                <h3 className="mb-2 font-bold text-lg mt-4">
                    {`Come Affrontare la Sindrome dell'Impostore`}
                </h3>
                <ul className="list-disc list-inside pl-3">
                    <li>
                        {`Riconosci i tuoi successi: Tieni traccia di cosa hai
                        realizzato. Ogni piccolo traguardo conta!`}
                    </li>
                    <li>
                        {`Parla con gli altri: Scambiare due chiacchiere con un
                        collega può rivelare che anche lui si sente un
                        impostore. È un sollievo, vero?`}
                    </li>
                    <li>
                        {`Focalizzati sul miglioramento: Nessuno è perfetto, e
                    nessuno sa tutto. Abbraccia il fatto che sbagliare è
                    parte del gioco!`}
                    </li>
                </ul>
                <br />
                <p>
                    {`La sindrome dell'impostore è un compagno di viaggio
                    fastidioso, ma può essere affrontata. In un settore come lo
                    sviluppo web, dove imparare è all'ordine del giorno,
                    ricordati che ognuno ha la propria strada. Sii gentile con
                    te stesso e accetta che, anche se ti senti un impostore, i
                    tuoi successi parlano chiaro!`}
                </p>
                <br />
                {`Hai mai provato la sindrome dell'impostore? Condividi la tua
                esperienza nei commenti! Insieme possiamo affrontare questa
                sfida e supportarci a vicenda!`}
            </div>
        ),
        tags: [],
    },
];

export default function BlogPage() {
    return (
        <main className="flex-1 container max-w-6xl px-4 md:px-6 py-8 grid md:grid-cols-[3fr_1fr] gap-8">
            <div className="space-y-8">
                {posts.map(
                    ({
                        id,
                        imgPath,
                        title,
                        slug,
                        author,
                        avatarImgPath,
                        updatedAt,
                        body,
                    }) => (
                        <Link key={id} href={slug}>
                            <article key={id} className="grid gap-4">
                                <img
                                    src={imgPath ?? "/imgs/placeholder.png"}
                                    alt="Featured Image"
                                    className="rounded-lg object-cover aspect-[2/1] w-full h-full"
                                />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        {title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Avatar className="w-6 h-6 border">
                                            <AvatarImage
                                                src={
                                                    avatarImgPath ??
                                                    "/placeholder-user.jpg"
                                                }
                                                alt="Author"
                                            />
                                            <AvatarFallback>
                                                {author
                                                    .split(" ")
                                                    .map((s) => s.charAt(0))
                                                    .join("")
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span>{author}</span>
                                        <span>•</span>
                                        <time dateTime="2023-07-15">
                                            {new Intl.DateTimeFormat("it-IT", {
                                                dateStyle: "medium",
                                            }).format(updatedAt)}
                                        </time>
                                    </div>
                                    {body}
                                </div>
                            </article>
                        </Link>
                    )
                )}
            </div>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Minimalism</Badge>
                            <Badge variant="outline">Web Design</Badge>
                            <Badge variant="outline">Storytelling</Badge>
                            <Badge variant="outline">User Experience</Badge>
                            <Badge variant="outline">Branding</Badge>
                            <Badge variant="outline">Digital Marketing</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Newsletter</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full"
                            />
                            <Button type="submit" className="w-full">
                                Subscribe
                            </Button>
                            <p className="text-xs text-muted-foreground">
                                Subscribe to our newsletter to stay up-to-date
                                with the latest blog posts and news.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
