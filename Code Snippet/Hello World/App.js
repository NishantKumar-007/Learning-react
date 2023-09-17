
        // const heading  = document.createElement("h1");
        // heading.innerHTML = "Hello from JS"
        // const root = document.getElementById("root").appendChild(heading);
        // document.appendChild(heading);

        // 3 parameters : tag name, attributes, children
        const heading = React.createElement("h1",{id: "heading"},"Hello world from React!");
        // create element does not give html tag instead it gives js/react object
        // just console.log(heading) and see

        //react has a different reactDOM than default DOM. So we need to create a root and assign heading to it.
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading); // object to html tag