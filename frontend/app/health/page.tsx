export default async function Health() {
    const response = await fetch('http://localhost:8000/health');
    const data = await response.json();
    return (
        <div>
            <h1>Health: {data.status}</h1>
        </div>
    );
}