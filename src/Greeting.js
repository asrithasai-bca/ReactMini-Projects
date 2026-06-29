function Greeting() {
    const hour = new Date().getHours();
    return(
        <div>
            <h2>
                {hour < 12
                ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening"}
            </h2>
        </div>
    );
}
export default Greeting;