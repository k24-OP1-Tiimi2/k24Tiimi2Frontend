export default function About() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-x-2 gap-y-2 font-serif">
            <h1 className="text-4xl mt-2 font-serif">About us:</h1>
            <p className="p-10 font-serif">Welcome to Paws Couture, where fashion meets fur! We specialize in chic and comfortable designer clothing for your beloved canine companions. Our mission is to elevate your pup's style with high-quality fabrics, trendy designs, and a touch of luxury. From cozy sweaters to adorable accessories, we cater to every pup's personality. Let your furry friend strut their stuff in the latest canine couture from Paws Couture!</p>
            <div className="container mx-auto flex flex-col justify-center items-center gap-y-2">
                <p>CEO: Erkki Versti</p>
                <p>CMO: Markku Arkkina</p>
                <p>PD: Heidi Ankkija</p>
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center gap-y-2 mt-5">
                <p>Establishment year: 2021</p>
                <p>Y-tunnus: FIN-024</p>
            </div>
        </div>

    );
}