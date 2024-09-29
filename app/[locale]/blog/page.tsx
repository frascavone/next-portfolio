import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
    return (
        <main className="flex-1 container max-w-6xl px-4 md:px-6 py-8 grid md:grid-cols-[3fr_1fr] gap-8">
            <div className="space-y-8">
                <article className="grid gap-4">
                    <img
                        src="/imgs/placeholder.png"
                        alt="Featured Image"
                        className="rounded-lg object-cover aspect-[2/1] w-full h-full"
                    />
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">
                            The Art of Minimalist Design: Simplicity, Elegance,
                            and Impact
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Avatar className="w-6 h-6 border">
                                <AvatarImage
                                    src="/placeholder-user.jpg"
                                    alt="Author"
                                />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span>John Doe</span>
                            <span>•</span>
                            <time dateTime="2023-07-15">July 15, 2023</time>
                        </div>
                        <p>
                            In a world where technology and digital experiences
                            dominate, the art of minimalist design has emerged
                            as a powerful force. This blog post explores the
                            principles of minimalist design, how it can create a
                            lasting impact, and the benefits it offers in
                            today's fast-paced digital landscape.
                        </p>
                    </div>
                </article>
                <article className="grid gap-4">
                    <img
                        src="/imgs/placeholder.png"
                        alt="Featured Image"
                        className="rounded-lg object-cover aspect-[2/1] w-full h-full"
                    />
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold">
                            Unlocking the Power of Storytelling in Web Design
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Avatar className="w-6 h-6 border">
                                <AvatarImage
                                    src="/placeholder-user.jpg"
                                    alt="Author"
                                />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span>John Doe</span>
                            <span>•</span>
                            <time dateTime="2023-07-01">July 1, 2023</time>
                        </div>
                        <p>
                            In the ever-evolving world of web design, the power
                            of storytelling has emerged as a crucial element in
                            captivating audiences and creating lasting
                            impressions. This blog post explores the art of
                            using storytelling techniques to craft engaging and
                            memorable web experiences.
                        </p>
                    </div>
                </article>
            </div>
            <div className="space-y-8">
                {/* <Card>
                        <CardHeader>
                            <CardTitle>Categories</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <nav className="grid gap-2">
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Design
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Development
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Marketing
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                    prefetch={false}
                                >
                                    Business
                                </Link>
                            </nav>
                        </CardContent>
                    </Card> */}

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
