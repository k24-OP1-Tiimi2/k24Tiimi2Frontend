import '../App.css';

export default function Home() {
    return (
      <div className="container mx-auto flex flex-col justify-center items-center gap-y-2 mt-2">
        <h1 className="text-4xl font-serif">Paws Couture</h1>
      <img className="dog-image" src="https://images.unsplash.com/photo-1713757500529-eaa942d3ce31?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    );
  }