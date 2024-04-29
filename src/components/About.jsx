export default function About() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-x-2 gap-y-2">
            <h1 className="text-4xl mt-2">About us:</h1>
            <p className="p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse voluptates, deserunt ea repudiandae voluptatum architecto omnis nulla sint odio possimus. Cupiditate error sunt tempora eligendi in cumque est, impedit libero illo consectetur molestiae aut ipsa accusantium perferendis culpa voluptatem repudiandae officiis nulla beatae, eaque aliquid alias eveniet. Earum, beatae?</p>
            <div className="container mx-auto flex flex-col justify-center items-center gap-y-2">
                <p>Toimitusjohtaja: Erkki Versti</p>
                <p>Markkinointikoordinaattori: Markku Arkkina</p>
                <p>Hankintajohtaja: Heidi Ankkija</p>
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center gap-y-2 mt-5">
                <p>Yrityksen perustamisvuosi: 2021</p>
                <p>Y-tunnus: FIN-024</p>
            </div>
        </div>

    );
}