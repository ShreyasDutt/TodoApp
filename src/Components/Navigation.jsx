import moment from "moment";

function Navigation() {

    const date = moment().format("ddd Do MMMM YYYY");

    let greet = '';

    const currentHour = moment().hour();

    if (currentHour < 12) {
        greet = "Morning";
    } else if (currentHour < 18) {
        greet = "Afternoon";
    } else {
        greet = "Evening";
    }

    console.log(greet);


    return (
        <div className={"flex my-10 mx-4"}>
            <div className={"flex flex-col space-y-1"}>
                <h1 className={"font-bold text-2xl md:text-4xl lg:text-5xl"}>Good {greet}! 👋</h1>
                <p className={"text-sm text-[#aeaeae] md:text-lg lg:text-xl"}>Today, {date}</p>
            </div>
        </div>
    );
}

export default Navigation;